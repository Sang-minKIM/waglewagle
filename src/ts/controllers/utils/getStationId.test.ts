import { describe, it, expect, beforeEach } from "vitest";
import { getStationId } from "./getStationId";

describe("getStationId with happy-dom", () => {
    // Given: 사전 조건으로 window.location.href를 설정
    beforeEach(() => {
        window.location.href = "http://www.waglewagle.store/station/12";
    });

    it("URL에서 역 ID를 추출하여 반환한다", () => {
        // When: getStationId 함수가 호출될 때
        const stationId = getStationId();

        // Then: 예상되는 역 ID가 반환되어야 한다
        expect(stationId).toBe("12");
    });
});
