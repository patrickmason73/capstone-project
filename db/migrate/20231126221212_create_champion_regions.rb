class CreateChampionRegions < ActiveRecord::Migration[6.1]
  def change
    create_table :champion_regions do |t|
      t.string :name
      t.text   :description
      t.timestamps
    end
  end
end
