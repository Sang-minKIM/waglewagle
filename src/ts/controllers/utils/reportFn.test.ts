import { describe, it, expect, beforeEach } from "vitest";
import { getReports, saveReport } from "./reportFn";

describe("localStorage를 사용한 report 관리", () => {
    beforeEach(() => {
        // Given: 각 테스트 실행 전에 localStorage 초기화
        window.localStorage.clear();
    });

    it("saveReport 함수는 postId를 localStorage에 저장한다", () => {
        // Given: 초기 상태에서 reportList 검증
        expect(getReports()).toEqual([]);

        // When: postId 저장
        saveReport(1);
        saveReport(2);

        // Then: 저장된 postId 배열 반환 검증
        expect(getReports()).toEqual([1, 2]);
    });

    it("getReports 함수는 저장된 postId 배열을 반환한다", () => {
        // Given: 여러 postId 저장
        saveReport(1);
        saveReport(2);
        saveReport(3);

        // When: getReports 함수 호출
        const reports = getReports();

        // Then: 저장된 postId 배열 반환 검증
        expect(reports).toEqual([1, 2, 3]);
    });
});
