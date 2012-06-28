class Remove < ActiveRecord::Migration
  def up
    remove_column :forms, :thumbnail
    remove_column :forms, :mesh
  end

  def down
  end
end
