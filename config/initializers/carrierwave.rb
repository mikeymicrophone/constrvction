CarrierWave.configure do |config|
  config.storage = :fog
  config.fog_credentials = {
    :provider               => 'AWS',
    :aws_access_key_id      => S3_ACCESS_KEY_ID,
    :aws_secret_access_key  => S3_SECRET_ACCESS_KEY
  }
  config.fog_directory  = "constrvct_#{Rails.env}"
end