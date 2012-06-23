class Design < ActiveRecord::Base
  belongs_to :form
  belongs_to :texture
  belongs_to :user
  attr_accessible :form_id, :texture_id, :image_data, :title, :description
  attr_accessor :image_data
  
  mount_uploader :preview, ImageUploader
end
