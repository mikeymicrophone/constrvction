class AddAttachmentPreviewToDesigns < ActiveRecord::Migration
  def self.up
    remove_column :designs, :preview
    
    add_column :designs, :preview_file_name, :string
    add_column :designs, :preview_content_type, :string
    add_column :designs, :preview_file_size, :integer
    add_column :designs, :preview_updated_at, :datetime
  end

  def self.down
    remove_column :designs, :preview_file_name
    remove_column :designs, :preview_content_type
    remove_column :designs, :preview_file_size
    remove_column :designs, :preview_updated_at
    
    add_column :designs, :preview
  end
end
