class User < ActiveRecord::Base
  has_many :designs
  has_many :textures
  
  
  # Include default devise modules. Others available are:
  # :token_authenticatable, :confirmable,
  # :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  # Setup accessible (or protected) attributes for your model
  attr_accessible :username, :email, :avatar, :avatar_file_name, :password, :password_confirmation, :remember_me
  # attr_accessible :title, :body
  
  has_attached_file :avatar, :styles => { :medium => "300x300#", :thumb => "100x100#" },
  :storage => :s3,
  :s3_credentials => "#{Rails.root}/config/s3.yml",
  :path => "users/:id/avatar/:basename_:style.:extension",
  :bucket => 'constrvct_development'
#  :default_url => '/images/missing_:style.jpg'
  
end
