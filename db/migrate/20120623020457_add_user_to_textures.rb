class AddUserToTextures < ActiveRecord::Migration
  def change
    add_column :textures, :user_id, :string
    add_index :textures, :user_id
    add_column :textures, :description, :string
  end
end
