class Form < ActiveRecord::Base
  has_many :designs
  attr_accessible :mesh, :name, :image, :front_mesh, :back_mesh

  has_attached_file :front_mesh,
  :storage => :filesystem
  
  has_attached_file :back_mesh,
  :storage => :filesystem

  has_attached_file :image, :styles => { :medium => "300x300#", :thumb => "100x100#" },
  :storage => :filesystem

=begin
  has_attached_file :front_mesh,
  :storage => :s3,
  :s3_credentials => "#{Rails.root}/config/s3.yml",
  :s3_headers => { 'Expires' => 1.year.from_now.httpdate },
  #:path => ":class/:attachment/:id/:filename",
  :s3_host_alias => 's3.constrvct.com',
  :bucket => 's3.constrvct.com',
  :url => ":s3_alias_url",
  :path => "/:class/:id/:filename"
  
  has_attached_file :back_mesh,
  :storage => :s3,
  :s3_credentials => "#{Rails.root}/config/s3.yml",
  :s3_headers => { 'Expires' => 1.year.from_now.httpdate },
  #:path => ":class/:attachment/:id/:filename",
  :s3_host_alias => 's3.constrvct.com',
  :bucket => 's3.constrvct.com',
  :url => ":s3_alias_url",
  :path => "/:class/:id/:filename"

  has_attached_file :image, :styles => { :medium => "300x300#", :thumb => "100x100#" },
  :storage => :s3,
  :s3_credentials => "#{Rails.root}/config/s3.yml",
  :s3_headers => { 'Expires' => 1.year.from_now.httpdate },
  :s3_host_alias => 's3.constrvct.com',
  :bucket => 's3.constrvct.com',
  :url => ":s3_alias_url",
  :path => "/:class/:id/:basename_:style.:extension",
  :default_url => '/images/missing_:style.jpg'

=end
  
end
