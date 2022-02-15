import { gql } from '@apollo/client';

export const QUERY_GET_LAUNCHES = gql`
  query GetLaunches($limit: Int) {
    launchesPast(limit: $limit) {
      id
      mission_name
      launch_date_utc
      launch_success
      launch_site {
        site_name_long
      }
      links {
        mission_patch_small
        video_link
        flickr_images
      }
      rocket {
        rocket_name
        rocket_type
      }
    }
  }
`;
