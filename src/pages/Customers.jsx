
import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Edit, Inject, Toolbar, Sort, Selection, Filter } from '@syncfusion/ej2-react-grids'

import { customersData, customersGrid } from '../data/dummy'
import { Header } from '../components'

export default function Customers() {
  const editing = { allowDeleting: true, allowEditing: true }

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Customers" />
      <GridComponent
        id="gridcomp"
        dataSource={customersData}
        allowPaging
        allowSorting
        allowExcelExport
        allowPdfExport
        toolbar={['Delete']}
        editSettings={editing}
        width='auto'
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[ Page, Toolbar, Selection, Edit, Sort, Filter]} />
      </GridComponent>
    </div>
  )
}
