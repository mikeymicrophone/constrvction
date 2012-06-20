class CreateTextures < ActiveRecord::Migration
  def change
    create_table :textures do |t|
      t.string :name
      t.string :image

      t.timestamps
    end
  end
end
