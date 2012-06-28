class Texture < ActiveRecord::Base
  has_many :designs
  belongs_to :user
  
  attr_accessible :image, :name
  
end
