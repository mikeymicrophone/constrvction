class Form < ActiveRecord::Base
  attr_accessible :mesh, :name, :thumbnail
  
  mount_uploader :mesh, MeshUploader
  mount_uploader :thumbnail, ImageUploader
end
