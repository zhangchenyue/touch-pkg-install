export interface ReleaseInfo {
  app_display_name: string;
  app_icon_url: string;
  app_name: string;
  app_os: string;
  bundle_identifier: string;
  destination_type: string;
  device_family: string;
  distribution_group_id: string;
  download_url: string;
  fileExtension: string;
  fingerprint: string;
  id: number;
  install_url: string;
  is_external_build: boolean;
  is_latest: boolean;
  mandatory_update: boolean;
  min_os: string;
  origin: string;
  owner: { name: string; display_name: string };
  provisioning_profile_type: string;
  release_notes: string;
  release_notes_url: string;
  short_version: string;
  size: number;
  status: string;
  uploaded_at: string;
  version: string;
}
