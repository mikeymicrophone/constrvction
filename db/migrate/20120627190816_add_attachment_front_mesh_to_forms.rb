class AddAttachmentFrontMeshToForms < ActiveRecord::Migration
  def self.up
    add_column :forms, :front_mesh_file_name, :string
    add_column :forms, :front_mesh_content_type, :string
    add_column :forms, :front_mesh_file_size, :integer
    add_column :forms, :front_mesh_updated_at, :datetime
    
    add_column :forms, :back_mesh_file_name, :string
    add_column :forms, :back_mesh_content_type, :string
    add_column :forms, :back_mesh_file_size, :integer
    add_column :forms, :back_mesh_updated_at, :datetime
    
    add_column :forms, :image_file_name, :string
    add_column :forms, :image_content_type, :string
    add_column :forms, :image_file_size, :integer
    add_column :forms, :image_updated_at, :datetime
  end

  def self.down
    remove_column :forms, :front_mesh_file_name
    remove_column :forms, :front_mesh_content_type
    remove_column :forms, :front_mesh_file_size
    remove_column :forms, :front_mesh_updated_at
    
    remove_column :forms, :back_mesh_file_name, :string
    remove_column :forms, :back_mesh_content_type, :string
    remove_column :forms, :back_mesh_file_size, :integer
    remove_column :forms, :back_mesh_updated_at, :datetime
    
    remove_column :forms, :image_file_name, :string
    remove_column :forms, :image_content_type, :string
    remove_column :forms, :image_file_size, :integer
    remove_column :forms, :image_updated_at, :datetime
  end
end
