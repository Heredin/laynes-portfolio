import type { Project } from "./Project";

export type APIResponse = {
    page: number;
    results: Project[];
    total_pages: number;
    total_results: number;
}