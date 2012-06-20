class CreateForms < ActiveRecord::Migration
  def change
    create_table :forms do |t|
      t.string :name
      t.string :thumbnail
      t.string :mesh

      t.timestamps
    end
  end
end
