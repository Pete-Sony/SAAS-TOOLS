const FilterComponent = React.memo(function FilterComponent({
    data,
    setLoading,
    searchParams,
    isLoading,
  }) {
    const router = useRouter();
    const pathname = usePathname();
    const [selectedVendors, setSelectedVendors] = useState([]);
    const [selectedBudgets, setSelectedBudgets] = useState([]);
    const [selectedSubmitters, setSelectedSubmitters] = useState([]);
    let filteredVendors = [];
    let filteredBudgets = [];
    let filteredSubmitters = [];
  
    if (searchParams.vendor) {
      const vendorIds = Array.isArray(searchParams.vendor)
        ? searchParams.vendor
        : searchParams.vendor.split(",");
  
      filteredVendors = data.vendors.filter((vendor) =>
        vendorIds.includes(vendor.id.toString())
      );
    }
  
    if (searchParams.budget) {
      const budgetIds = Array.isArray(searchParams.budget)
        ? searchParams.budget
        : searchParams.budget.split(",");
  
      filteredBudgets = data.budgets.filter((budget) =>
        budgetIds.includes(budget.id.toString())
      );
    }
  
    if (searchParams.submitted_by) {
      const submitterIds = Array.isArray(searchParams.submitted_by)
        ? searchParams.submitted_by
        : searchParams.submitted_by.split(",");
  
      filteredSubmitters = data.members.filter((member) =>
        submitterIds.includes(member.user.id.toString())
      );
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      setLoading(true);
      const form = event.currentTarget;
      const formData = new FormData(form);
      const searchParams = new URLSearchParams();
  
      formData.forEach((value, key) => {
        if (value !== "" && value !== "all") {
          if ((key == "payment_process" || key == "status") && value !== "")
            value = JSON.parse(value);
          searchParams.append(key, value.toString());
        }
      });
  
      // Add selected vendors to searchParams
      selectedVendors.forEach((vendor) => {
        searchParams.append("vendor", vendor.id);
      });
  
      selectedBudgets.forEach((budget) => {
        searchParams.append("budget", budget.id);
      });
  
      selectedSubmitters.forEach((submitter) => {
        searchParams.append("submitted_by", submitter.user.id);
      });
  
      const queryString = searchParams.toString();
      if (queryString) {
        // router.push(`?${queryString}`)
        window.location.href = `${pathname}?${queryString}`;
      } else {
        window.location.href = `${pathname}`;
      }
    };
  
    const handleReset = () => {
      setLoading(true);
      window.location.href = `${pathname}`;
    };
  
    return (
      <AccordionGroup
        transition="0.3s ease"
        variant="outlined"
        sx={{ borderRadius: "sm" }}
      >
        <Accordion defaultExpanded>
          <AccordionSummary>
            <Typography level="title-md" fontWeight="bold">
              Filter
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <form action="" method="GET" onSubmit={handleSubmit}>
              <Box>
                <Grid container spacing={2}>
                  <Grid xs={12}>
                    <FormControl>
                      <FormLabel>Sort By:</FormLabel>
                      <Select
                        name="sort_by"
                        defaultValue={searchParams.sort_by || ""}
                        disabled={isLoading}
                      >
                        <Option value="all">All</Option>
                        <Option value="ASC">Date ASC</Option>
                        <Option value="DESC">Date DESC</Option>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid xs={6}>
                    <FormControl>
                      <FormLabel>Date from:</FormLabel>
                      <Input
                        name="date_from"
                        type="date"
                        defaultValue={searchParams.date_from || ""}
                        disabled={isLoading}
                      />
                    </FormControl>
                  </Grid>
                  <Grid xs={6}>
                    <FormControl>
                      <FormLabel>Date to:</FormLabel>
                      <Input
                        name="date_to"
                        type="date"
                        defaultValue={searchParams.date_to || ""}
                        disabled={isLoading}
                      />
                    </FormControl>
                  </Grid>
                  <Grid xs={12}>
                    <FormControl>
                      <FormLabel>POR Number:</FormLabel>
                      <Input
                        name="por_remote_id"
                        placeholder="POR-Number"
                        defaultValue={searchParams.por_remote_id || ""}
                        disabled={isLoading}
                      />
                    </FormControl>
                  </Grid>
                  <Grid xs={12}>
                    <FormControl>
                      <FormLabel>Is Paid Out:</FormLabel>
                      <Select
                        name="is_paid_out"
                        defaultValue={searchParams.is_paid_out || ""}
                        disabled={isLoading}
                      >
                        <Option value="all">All</Option>
                        <Option value="true">True</Option>
                        <Option value="false">False</Option>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid xs={12}>
                    <FormControl>
                      <FormLabel>Payment Process:</FormLabel>
  
                      <Select
                        name="payment_process"
                        multiple
                        defaultValue={
                          (searchParams.payment_process &&
                            searchParams.payment_process.split(",")) || [""]
                        }
                        disabled={isLoading}
                      >
                        <Option value="bank_transfer">Bank Transfer</Option>
                        <Option value="upi">UPI</Option>
                        <Option value="swift">SWIFT</Option>
                        <Option value="card">Card</Option>
                        <Option value="cash">Cash</Option>
                        <Option value="reimbursement">Reimbursement</Option>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid xs={12}>
                    <FormControl>
                      <FormLabel>Status:</FormLabel>
  
                      <Select
                        name="status"
                        multiple
                        defaultValue={
                          (searchParams.status &&
                            searchParams.status.split(",")) || [""]
                        }
                        disabled={isLoading}
                      >
                        <Option value="approved">approved</Option>
                        <Option value="pending approval 1">
                          pending approval 1
                        </Option>
                        <Option value="pending approval 2">
                          pending approval 2
                        </Option>
                        <Option value="rejected by approver 1">
                          rejected by approver 1
                        </Option>
                        <Option value="rejected by approver 2">
                          rejected by approver 2
                        </Option>
                        <Option value="cancelled">Cancelled</Option>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid xs={12}>
                    <FormControl>
                      <FormLabel>Grand Total (INR):</FormLabel>
  
                      <Box sx={{ display: "flex", gap: 1 }}>
                        <Input
                          name="tv_greater_than"
                          type="number"
                          placeholder="greater than"
                          sx={{ flexGrow: 1 }}
                          defaultValue={searchParams.tv_greater_than || ""}
                          disabled={isLoading}
                        />
                        <Input
                          name="tv_less_than"
                          type="number"
                          placeholder="less than"
                          sx={{ flexGrow: 1 }}
                          defaultValue={searchParams.tv_less_than || ""}
                          disabled={isLoading}
                        />
                      </Box>
                    </FormControl>
                  </Grid>
                  <Grid xs={12}>
                    <FormControl>
                      <FormLabel>Vendor:</FormLabel>
                      <Autocomplete
                        multiple
                        name="vendor"
                        options={data.vendors}
                        getOptionLabel={(option) => option.name}
                        defaultValue={filteredVendors}
                        onChange={(event, newValue) => {
                          setSelectedVendors(newValue);
                        }}
                        disabled={isLoading}
                      />
                    </FormControl>
                  </Grid>
                  <Grid xs={12}>
                    <FormControl>
                      <FormLabel>Budget:</FormLabel>
                      <Autocomplete
                        multiple
                        name="budget"
                        options={data.budgets}
                        getOptionLabel={(option) => option.name}
                        defaultValue={filteredBudgets}
                        onChange={(event, newValue) => {
                          setSelectedBudgets(newValue);
                        }}
                        disabled={isLoading}
                      />
                    </FormControl>
                  </Grid>
                  <Grid xs={12}>
                    <FormControl>
                      <FormLabel>Submitted By:</FormLabel>
                      <Autocomplete
                        multiple
                        name="submitted_by"
                        options={data.members}
                        getOptionLabel={(option) => option.user.name}
                        defaultValue={filteredSubmitters}
                        onChange={(event, newValue) => {
                          setSelectedSubmitters(newValue);
                        }}
                        disabled={isLoading}
                      />
                    </FormControl>
                  </Grid>
                  <Grid xs={6}>
                    <Button
                      type="submit"
                      fullWidth
                      color="primary"
                      startDecorator={<FilterAltIcon />}
                      disabled={isLoading}
                    >
                      Apply filter
                    </Button>
                  </Grid>
                  <Grid xs={6}>
                    <Button
                      fullWidth
                      variant="outlined"
                      color="primary"
                      onClick={handleReset}
                      disabled={isLoading}
                    >
                      Reset
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </form>
          </AccordionDetails>
        </Accordion>
      </AccordionGroup>
    );
  });