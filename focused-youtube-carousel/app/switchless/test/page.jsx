"use client"
import { Button,Link } from "@mui/joy";
import Box from "@mui/joy/Box";
import TabNavigation from "../_components/TabPanel";
import Logo from "../_components/LogoV1";
import LogoV2 from "../_components/Logo";
import TableData from "../_components/TableData";
import CustomTable from "../_components/Table";

function Page() {
  const { PORs } = TableData;

const transformPORsToTableData = (PORs) => {
    return PORs.map((item) => [
      <Link
        key={item.id}
        sx={{ textDecoration: "none", "&:hover": { textDecoration: "none" } }}
        href={`/org/${item.org}/por/po_request/${item.id}`}
      >
        <span style={{ whiteSpace: "nowrap" }}>{item.remote_id}</span>
      </Link>,
      item.vendor.name,
      item.budget.name,
      <span key={item.id} style={{ whiteSpace: "nowrap" }}>something</span>,
      <span
        key={item.id}
        style={{
          backgroundColor:"red",
          color: "white",
          padding: '4px 8px',
          borderRadius: '4px',
          display: 'inline-block',
        }}
      >
        {item.status}
      </span>,
      item.payment_process,
      <span key={item.id} style={{ whiteSpace: "nowrap" }}>{`${item.currency} ${item.basic_total}`}</span>,
      <span key={item.id} style={{ whiteSpace: "nowrap" }}>{`${item.currency} ${item.grand_total}`}</span>,
      item.submitted_by.name,
      item.is_paid_out ? 
        <span key={item.id} style={{ color: "#2c662d", backgroundColor: "#fcfff5", padding: '4px 8px', borderRadius: '4px' }}>paid</span> :
        <span key={item.id} style={{ color: "#9f3a38", backgroundColor: "#fff6f6", padding: '4px 8px', borderRadius: '4px' }}>not paid</span>,
      <Box
        key={item.id}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        {item.documents.length ? (
          <>
            
            {item.documents.length}
          </>
        ) : (
          0
        )}
      </Box>,
    ]);
  }
  const tableBodyData = transformPORsToTableData(TableData.PORs);
  const headers = ["PO Request Number", "Vendor", "Budget", "Date", "Status", "Payment Process", "PO Basic Total", "PO Grand Total", "Submitted By", "Is paid out", ""];


  return (
    <>
      <h1>Test Page</h1>
  
     
        <Logo/>
        <CustomTable headers={headers} data={tableBodyData} />
      {/* </Box> */}
    </>
  )
}

export default Page