class ChangeUserFromTextures < ActiveRecord::Migration
  def change
    remove_column :textures, :user_id
  
  change_table :textures do |t|
    t.belongs_to :user
  end
  
  add_index :textures, :user_id

  end
end
