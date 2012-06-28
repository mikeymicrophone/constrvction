class Texture < ActiveRecord::Base
  has_many :designs
  belongs_to :user
  
  attr_accessible :image, :name, :description
  
  has_attached_file :image, :styles => { :v512 =>"512x512#", :medium => "600x600>", :thumb => "100x100#" },
  :storage => :filesystem
end
