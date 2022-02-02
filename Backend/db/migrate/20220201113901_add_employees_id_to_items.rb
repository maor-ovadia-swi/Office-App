class AddEmployeesIdToItems < ActiveRecord::Migration[7.0]
  def change
    add_column :items, :employees_id, :integer
    add_index :items, :employees_id
  end
end
