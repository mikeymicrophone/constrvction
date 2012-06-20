class Form < ActiveRecord::Base
  has_many :designs
  attr_accessible :mesh, :name, :thumbnail
  
  mount_uploader :mesh, MeshUploader
  mount_uploader :thumbnail, ImageUploader
end
