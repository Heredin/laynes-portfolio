export type Project = {
    id: number;
    attributes:{
    name: string;
    description:string;
    demo_url:string;
    slug: string;
    featured_image : {
        data: {
            attributes:{
                alternativeText: string;
                formats: {
                    large: {
                        url: string;
                    }
                }
            }
        }
    }
    published_date: string;
    }
}