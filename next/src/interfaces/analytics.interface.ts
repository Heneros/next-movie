export interface MonthStats {
    year: number;
    month: number;
    monthName: string;
    views: number;
}

export interface ProfileStatsResponse {
    data: MonthStats[];
    peak: {
        views: number;
        month: MonthStats;
    };
    minimum: {
        views: number;
        month: MonthStats;
    };
    total: number;
}

export interface IncrementViewResponse {
    success: boolean;
    data: {
        id: string;
        userId: string;
        year: number;
        month: number;
        viewCount: number;
    };
}
