const ROUTE_PARAMETER_REGEXP = /:(\w+)/g;
const URL_FRAGMENT_REGEXP = "([^\\/]+)";
const TICKTIME = 250;

// 라우터에서 사용되는 인터페이스 정의
interface Route {
    testRegExp: RegExp;
    callback: (params: Record<string, string>) => void;
    params: string[];
}

// URL 파라미터 추출 함수 타입 정의
interface ExtractUrlParams {
    (route: Route, pathname: string): Record<string, string>;
}

// 라우터 객체의 인터페이스 정의
interface Router {
    addRoute: (path: string, callback: (params: Record<string, string>) => void) => Router;
    setNotFound: (cb: () => void) => Router;
    navigate: (path: string) => void;
    start: () => void;
}

const extractUrlParams: ExtractUrlParams = (route, pathname) => {
    const params: Record<string, string> = {};

    if (route.params.length === 0) {
        return params;
    }

    const matches: string[] | null = pathname.match(route.testRegExp);

    matches?.shift();

    matches?.forEach((paramValue, index) => {
        const paramName = route.params[index];
        params[paramName] = paramValue;
    });

    return params;
};

export const createRouter = (): Router => {
    const routes: Route[] = [];
    let notFound = () => {};
    let lastPathname = "";

    const router = {} as Router;

    const checkRoutes = () => {
        const { pathname } = window.location;
        if (lastPathname === pathname) {
            return;
        }

        lastPathname = pathname;

        const currentRoute = routes.find((route) => {
            const { testRegExp } = route;
            return testRegExp.test(pathname);
        });

        if (!currentRoute) {
            notFound();
            return;
        }

        const urlParams = extractUrlParams(currentRoute, pathname);

        currentRoute.callback(urlParams);
    };

    router.addRoute = (path, callback) => {
        const params: string[] = [];

        const parsedPath = path
            .replace(ROUTE_PARAMETER_REGEXP, (_, paramName) => {
                params.push(paramName);
                return URL_FRAGMENT_REGEXP;
            })
            .replace(/\//g, "\\/");

        routes.push({
            testRegExp: new RegExp(`^${parsedPath}$`),
            callback,
            params,
        });

        return router;
    };

    router.setNotFound = (cb) => {
        notFound = cb;
        return router;
    };

    router.navigate = (path) => {
        window.history.pushState(null, "", path);
        checkRoutes();
    };

    router.start = () => {
        checkRoutes();
    };

    return router;
};
