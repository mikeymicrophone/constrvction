class AddAttachmentImageToTextures < ActiveRecord::Migration
  def self.up
    remove_column :textures, :image
    
    add_column :textures, :image_file_name, :string
    add_column :textures, :image_content_type, :string
    add_column :textures, :image_file_size, :integer
    add_column :textures, :image_updated_at, :datetime
  end

  def self.down
    remove_column :textures, :image_file_name
    remove_column :textures, :image_content_type
    remove_column :textures, :image_file_size
    remove_column :textures, :image_updated_at
    
    add_column :textures, :image
  end
end
