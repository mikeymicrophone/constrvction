class Design < ActiveRecord::Base
  belongs_to :form
  belongs_to :texture
  belongs_to :user
  attr_accessible :form_id, :texture_id, :image_data, :title, :description, :preview
  
  
  has_attached_file :preview, :styles => { :thumb => "200x200>", :thumb => "100x100#" },
  :storage => :filesystem
  attr_accessor :image_data
  
end
