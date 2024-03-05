import { vi, describe, it, expect } from "vitest";
import { getStationId } from "./getStationId";

const mockLocation = {
    pathname: "www.waglewagle.store/station/12",
};

// Given: window.location의 pathname을 모의 설정
vi.stubGlobal("location", mockLocation);

describe("getStationId", () => {
    it("URL에서 역 ID를 추출하여 반환한다", () => {
        // When: getStationId 함수가 호출될 때
        const stationId = getStationId();
        // Then: 예상되는 역 ID가 반환되어야 한다
        expect(stationId).toBe("12");
    });
});
