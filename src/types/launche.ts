export type Launche = {
  id: string;
  mission_name: string;
  launch_date_utc: string;
  launch_success: boolean;
  launch_site: {
    site_name_long: string;
  };
  links: {
    mission_patch_small: string;
    video_link: string;
    flickr_images: string[];
  };
  rocket: {
    rocket_name: string;
    rocket_type: string;
  };
};

export type LaunchesPast = {
  launchesPast: Launche[];
};

export type LaunchesPastVariables = {
  limit?: number;
};
