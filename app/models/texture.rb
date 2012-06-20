class Texture < ActiveRecord::Base
  has_many :designs
  attr_accessible :image, :name
  
  mount_uploader :image, TextureUploader
end
