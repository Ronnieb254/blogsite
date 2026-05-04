import gql from 'graphql-tag'

//Logout
export const LOGOUT_MUTATION = gql`
  mutation Logoutuser {
    logoutuser {
      userId
      token
    }
  }
`
//STATE
export const ALL_STATES_QUERY = gql`
  query States($offset: Int, $limit: Int, $filter: stateFilter) {
    states(offset: $offset, limit: $limit, filter: $filter) {
      id
      name
      code
      country {
        id
        name
        code
      }
      tax_rate
      createdAt
      updatedAt
    }
  }
`
export const ADD_STATE_MUTATION = gql`
  mutation CreateState($input: StateInput) {
    createState(input: $input) {
      abbreviation
      state_name
      tax_amount
    }
  }
`
export const DELETE_STATE_MUTATION = gql`
  mutation DeleteState($deleteStateId: Int!) {
    deleteState(id: $deleteStateId)
  }
`
export const EDIT_STATE_MUTATION = gql`
  mutation UpdateState($updateStateId: Int!, $input: StateUpdate) {
    updateState(id: $updateStateId, input: $input) {
      state_id
      state_name
      abbreviation
      tax_amount
    }
  }
`
//SRT AGENCY
export const ALL_SRT_AGENCY_QUERY = gql`
  query SrtAgencies($type: String) {
    srtAgencies(type: $type) {
      srt_agency_id
      agency_name
      abbreviation
      url
      agency_id {
        site_url
        agency_name
        agency_id
        abbreviation
        state_id {
          state_id
          state_name
          abbreviation
        }
      }
    }
  }
`
//SRT
export const CREATE_SRT = gql`
  mutation CreateSrt($input: CreateSrt) {
    createSrt(input: $input) {
      srt_id
      license_plate

      trxn_datetime
      exit_lane
      location
      account_id
      reference_id
      invoice_id
      violation_id
      amount_due
      due_date
      pin_no
      scan_date
      unit_id
      name
      address
      status

      infration_date
      violation_status
      citation_case_no
    }
  }
`
export const REASSIGN_SRT = gql`
  mutation ReassignScan($scanId: ID!, $userId: ID!, $reason: String!) {
    reassignScan(scanId: $scanId, userId: $userId, reason: $reason) {
      status
      assigned_id
    }
  }
`

export const FILTER_BY_SRT_RAW = gql`
  query DistinctDailyScan($limit: Int!, $offset: Int!, $search: scanFilter) {
    distinctDailyScan(limit: $limit, offset: $offset, search: $search) {
      scan_id
      scanner
      agency_invoice_status
      scan_doc_file
      scan_doc_name
      no_invoices
      scan_status
      processor {
        first_name
        last_name
      }
      validator {
        first_name
        last_name
      }
      picked_date
      processed_date
      srt_doc_file
      srt_status
      srt_lp
      srt_amount

      pay_by
      pay_date
      paid_srt_doc_file
      paid_srt_date
      scan_type
      createdAt
      updatedAt
    }
  }
`
export const UPDATE_SRT = gql`
  mutation UpdateSrt($updateSrtId: Int!, $input: SrtInput) {
    updateSrt(id: $updateSrtId, input: $input) {
      srt_id
      license_plate
      trxn_datetime
      exit_lane
      location
      account_id
      reference_id
      invoice_id
      violation_id
      amount_due
      due_date
      pin_no
      scan_date
    }
  }
`
export const UPDATE_SRT_RAW = gql`
  mutation UpdateSrtRaw($input: srtrawupdate) {
    updateSrtRaw(input: $input) {
      srt_raw_id
      license_plate
      lp_state
      trxn_datetime
      exit_lane
      location
      account_id
    }
  }
`

export const DELETE_SRT_RAW = gql`
  mutation DeleteSrtRaw($deleteSrtRawId: Int!) {
    deleteSrtRaw(id: $deleteSrtRawId)
  }
`
export const ALL_SRT = gql`
  query Srts($limit: Int!, $offset: Int!, $filterScan: scanFilter) {
    srts(limit: $limit, offset: $offset, filterScan: $filterScan) {
      srt_id
      license_plate

      trxn_datetime
      exit_lane
      location
      account_id
      reference_id
      invoice_id
      violation_id
      amount_due
      due_date
      pin_no
      scan_date
      unique_id
      transaction_id
      message
      unit_id
      name
      address
      status

      infration_date
      violation_status
      citation_case_no
      agency {
        agency_name
      }
      lp_state {
        state_name
      }
      scan_id {
        scan_id
        scan_doc_file
        scan_doc_name
      }
      client_id {
        organization
        phone
        org_email
      }
    }
  }
`
export const ASSIGN_SRT = gql`
  mutation UpdateDailyScan($updateDailyScanId: Int!, $input: DailyScanInput) {
    updateDailyScan(id: $updateDailyScanId, input: $input) {
      picked_date
      processor {
        first_name
        last_name
      }
      scan_status
    }
  }
`
//VALIDATION
export const VALIDATE_SRT = gql`
  mutation UpdateDailyScan($updateDailyScanId: Int!, $input: DailyScanInput) {
    updateDailyScan(id: $updateDailyScanId, input: $input) {
      validator
      scan_status
    }
  }
`
export const VALIDATION_PDF = gql`
  query Query($dailyScanId: Int!) {
    dailyScan(dailyScanId: $dailyScanId) {
      scan_id
      scan_doc_file
      scan_doc_name
      scan_status
    }
  }
`
//AGENCY
export const ALL_AGENCYS_QUERY = gql`
  query Agencies($offset: Int, $limit: Int) {
    agencies(offset: $offset, limit: $limit) {
      id
      name
      abbreviation
      site_url
      state {
        id
        name
        code
      }
      createdAt
      updatedAt
    }
  }
`
export const ALL_SRT_AGENCYS_QUERY = gql`
  query SrtAgencies {
    srtAgencies {
      srt_agency_id
      agency_name
      abbreviation
    }
  }
`
export const ADD_AGENCY_MUTATION = gql`
  mutation CreateAgency($input: AgencyInput) {
    createAgency(input: $input) {
      agency_id
      agency_name
      abbreviation
      site_url
      state_id {
        state_name
        state_id
      }
    }
  }
`
export const DELETE_AGENCY_MUTATION = gql`
  mutation DeleteAgency($deleteAgencyId: Int!) {
    deleteAgency(id: $deleteAgencyId)
  }
`
export const EDIT_AGENCY_MUTATION = gql`
  mutation UpdateAgency($updateAgencyId: Int!, $input: updateagency) {
    updateAgency(id: $updateAgencyId, input: $input) {
      state_id {
        tax_amount
        state_name
        state_id
        abbreviation
      }
      site_url
      agency_name
      agency_id
      abbreviation
    }
  }
`

export const DELETE_CATEGORY_MUTATION = gql`
  mutation DeleteFileCategory($deleteFileCategoryId: Int!) {
    deleteFileCategory(id: $deleteFileCategoryId)
  }
`
export const EDIT_CATEGORY_MUTATION = gql`
  mutation UpdateFileCategory($updateFileCategoryId: Int!, $input: FileCategoryInput) {
    updateFileCategory(id: $updateFileCategoryId, input: $input) {
      editable
      file_category_id
      file_category_name
    }
  }
`
//User
export const ALL_USER_QUERY = gql`
  query Employees {
    employees {
      first_name
      last_name
      id
      initials
    }
  }
`
export const FILTER_BY_PROCESSOR = gql`
  query Users($limit: Int!, $offset: Int!, $search: scanFilter) {
    dailyScans(limit: $limit, offset: $offset, search: $search) {
      scan_id
      client_id {
        organization
        phone
        org_email
      }
      scanner
      agency_invoice_status
      scan_doc_file
      scan_doc_name
      no_invoices
      scan_status

      picked_date
      processed_date
      srt_doc_file
      srt_status
      srt_lp
      srt_amount
      pay_by
      pay_date
      paid_srt_doc_file
      paid_srt_date
      scan_type
      processor {
        first_name
        last_name
      }
    }
  }
`
//DAILY SCANS
export const FILTER_DATE = gql`
  query DailyScans(
    $limit: Int!
    $offset: Int!
    $startDate: String
    $endDate: String
    $search: scanFilter
  ) {
    dailyScans(
      limit: $limit
      offset: $offset
      startDate: $startDate
      endDate: $endDate
      search: $search
    ) {
      scan_id
      scanner
      agency_invoice_status
      scan_doc_file
      scan_doc_name
      no_invoices
      scan_status
      picked_date
      processed_date
      srt_doc_file
      srt_status
      srt_lp
      srt_amount
      processor {
        first_name
        last_name
      }
      pay_by
      pay_date
      paid_srt_doc_file
      paid_srt_date
      scan_type
      createdAt
      updatedAt
      client_id {
        phone
        organization
        org_email
      }
    }
  }
`
export const ASSIGN_SCAN = gql`
  mutation AssingScan($userId: ID!, $scanId: ID!) {
    assingScan(userId: $userId, scanId: $scanId) {
      status
      assigned_id
      scan_id {
        scan_doc_name
        scan_doc_file
      }
    }
  }
`
export const SELF_ASSIGN_SCAN = gql`
  mutation SelfassingScan($scanId: ID!) {
    selfassingScan(scanId: $scanId) {
      assigned_id
      status
    }
  }
`
export const DELETE_DAILY_SCAN = gql`
  mutation DeleteDailyScan($deleteDailyScanId: Int!) {
    deleteDailyScan(id: $deleteDailyScanId)
  }
`
export const FILTER_BY_STATUS = gql`
  query DailyScans(
    $limit: Int!
    $offset: Int!
    $search: scanFilter
    $startDate: String
    $endDate: String
  ) {
    dailyScans(
      limit: $limit
      offset: $offset
      search: $search
      startDate: $startDate
      endDate: $endDate
    ) {
      scan_id
      client_id {
        organization
        phone
        org_email
      }
      scanner
      agency_invoice_status
      scan_doc_file
      scan_doc_name
      no_invoices
      scan_status
      processor {
        first_name
        last_name
      }
      validator {
        first_name
        last_name
      }
      picked_date
      processed_date
      srt_doc_file
      srt_status
      srt_lp
      srt_amount

      pay_by
      pay_date
      paid_srt_doc_file
      paid_srt_date
      scan_type
      createdAt
    }
  }
`
export const ALL_SCANS_QUERY = gql`
  query DailyScans($limit: Int!, $offset: Int!) {
    dailyScans(limit: $limit, offset: $offset) {
      scan_id
      client_id {
        organization
        phone
        org_email
      }
      scanner
      agency_invoice_status
      scan_doc_file
      scan_doc_name
      no_invoices
      scan_status
      user_id {
        user_id
        first_name
      }
      processor {
        first_name
        user_id
      }
      validator {
        user_id
        first_name
      }
      picked_date
      processed_date
      srt_doc_file
      srt_status
      srt_lp
      srt_amount

      pay_by
      pay_date
      paid_srt_doc_file
      paid_srt_date
      scan_type
      createdAt
    }
  }
`

//MARK VALIDATION
export const MARK_VALIDATION = gql`
  mutation MarkAsValidated($scanId: ID!) {
    markAsValidated(scan_id: $scanId) {
      scan_id
      scanner
      scan_doc_file
      scan_doc_name
      no_invoices
      scan_status
    }
  }
`
//DAILY SCANS
export const ALL_USERS_QUERY = gql`
  query DailyScans($limit: Int!, $offset: Int!) {
    dailyScans(limit: $limit, offset: $offset) {
      scan_id
      client_id {
        organization
        phone
        org_email
      }
      scanner
      agency_invoice_status
      scan_doc_file
      scan_doc_name
      no_invoices
      scan_status
      processor
      validator
      picked_date
      processed_date
      srt_doc_file
      srt_status
      srt_lp
      srt_amount
      user_id
      pay_by
      pay_date
      paid_srt_doc_file
      paid_srt_date
      scan_type
    }
  }
`
export const ADD_USER_MUTATION = gql`
  mutation CreateUser($createAcc: createuser) {
    createUser(createAcc: $createAcc) {
      user_id
      first_name
      last_name
    }
  }
`
export const CURRENT_USER_MUTATION = gql`
  query CurrentUser {
    currentUser {
      user_id
      first_name
      last_name
      username
      email
      phone_number

      role {
        group_id {
          group_name
        }
      }
      createdAt
      updatedAt
    }
  }
`

export const LOGIN_USER_MUTATION = gql`
  mutation LoginEmployee($username: String!, $password: String!) {
    loginEmployee(username: $username, password: $password) {
      authData {
        token
      }
      employee {
        id
        first_name
        last_name
        phone_number
        title
        address
        initials
      }
    }
  }
`

//SRT RAW
export const SRTRAW_FILTERS = gql`
  query SrtRaws($limit: Int!, $offset: Int!, $filterScan: scanFilter) {
    srtRaws(limit: $limit, offset: $offset, filterScan: $filterScan) {
      srt_raw_id
      license_plate
      lp_state
      trxn_datetime
      exit_lane
      location
      account_id
      reference_id
      invoice_id
      violation_id
      amount_due
      due_date
      pin_no
      scan_date
      unit_id
      name
      address
      status
      agency
      infration_date
      citation_case_no
      violation_status
      client_id {
        organization
        phone
        org_email
      }
      scan_id {
        scan_id
      }
      message
    }
  }
`
export const SRT_RAW = gql`
  query DistinctDailyScan($limit: Int!, $offset: Int!) {
    distinctDailyScan(limit: $limit, offset: $offset) {
      scan_id
      client_id {
        organization
        phone
        org_email
      }
      scanner
      agency_invoice_status
      scan_doc_file
      scan_doc_name
      no_invoices
      scan_status
      processor {
        first_name
        last_name
      }
      validator {
        first_name
        last_name
      }
      picked_date
      processed_date
      srt_doc_file
      srt_status
      srt_lp
      srt_amount
      user_id {
        first_name
        last_name
      }
      pay_by
      pay_date
      paid_srt_doc_file
      paid_srt_date
      scan_type
      createdAt
      updatedAt
    }
  }
`
export const SRT_FILTER = gql`
  query DistinctDailyScan($limit: Int!, $offset: Int!, $filterScan: scanFilter) {
    srtRaws(limit: $limit, offset: $offset, filterScan: $filterScan) {
      srt_raw_id
      license_plate
      lp_state
      trxn_datetime
      exit_lane
      location
      account_id
      reference_id
      invoice_id
      violation_id
      amount_due
      due_date
      pin_no
      scan_date
      unit_id
      name
      address
      status
      agency
      infration_date
      citation_case_no
      violation_status
      client_id {
        organization
        phone
        org_email
      }

      message
      scan_id {
        scan_id
      }
    }
  }
`
export const ALL_SRTRAW = gql`
  query SrtRaws($limit: Int!, $offset: Int!) {
    srtRaws(limit: $limit, offset: $offset) {
      srt_raw_id
      license_plate
      lp_state
      trxn_datetime
      exit_lane
      location
      account_id
      reference_id
      invoice_id
      violation_id
      amount_due
      due_date
      pin_no
      scan_date
      unit_id
      name
      address
      status
      agency
      infration_date
      citation_case_no
      violation_status
      client_id {
        organization
        phone
        org_email
      }
      scan_id {
        scan_id
        scan_doc_name
      }
    }
  }
`

export const INSIGHTS = gql`
  query DailyScansTotal($input: dailyscaninsights) {
    dailyScansTotal(input: $input) {
      totalSrts
      totalScan
      totalLps
      invoiceCount
      citationCount
      rentalCount
    }
  }
`
export const UPDATE_USER = gql`
  mutation Updateuser($updateuserId: Int!, $input: UserInput) {
    updateuser(id: $updateuserId, input: $input) {
      user_id
      first_name
      last_name
      username
      email
      date_of_birth
      gender
      location
      profile_picture
      phone_number
    }
  }
`

export const SRT_PAYMENT = gql`
  query Srts($filterScan: scanFilter, $offset: Int!, $limit: Int!, $filterSrt: srtFilter) {
    srts(filterScan: $filterScan, offset: $offset, limit: $limit, filterSrt: $filterSrt) {
      srt_id
      license_plate
      lp_state {
        state_name
        abbreviation
      }
      trxn_datetime
      exit_lane
      location
      account_id
      reference_id
      invoice_id
      violation_id
      amount_due
      due_date
      pin_no
      scan_date
      unit_id
      name
      address
      status
      agency {
        agency_name
      }
      infration_date
      violation_status
      citation_case_no
      client_id {
        organization
        phone
        org_email
      }
      scan_id {
        scan_doc_name
      }
    }
  }
`
export const ACCOUNT_AGENCY = gql`
  query AccountAgencies {
    accountAgencies {
      account_agency_id
      agency_name
      abbreviation
      site_url
    }
  }
`

export const PAYMENT_AGENCY = gql`
  query PaymentAgencies {
    paymentAgencies {
      payment_agency_id
      agency_name
      abbreviation
      site_url
    }
  }
`
export const AGENCY_ACCOUNT = gql`
  query AgencyAccounts {
    agencyAccounts {
      account_id
      account_name
      username
      password
      agency_id {
        agency_id
        agency_name
        abbreviation
      }
    }
  }
`

export const UPDATE_SRTAGENCY_MUTATION = gql`
  mutation UpdateSRTAgency($updateSrtAgencyId: Int!, $input: SRTAgencyInput) {
    updateSRTAgency(id: $updateSrtAgencyId, input: $input) {
      srt_agency_id
      agency_name
      abbreviation
      agency_id {
        agency_id
      }
    }
  }
`

export const CREATE_SRTAGENCY_MUTATION = gql`
  mutation CreateSRTAgency($agencyId: ID, $abbreviation: String!, $agencyName: String!) {
    createSRTAgency(agency_id: $agencyId, abbreviation: $abbreviation, agency_name: $agencyName) {
      srt_agency_id
      agency_name
      abbreviation
      createdAt
    }
  }
`

export const DELETE_SRTAGENCY_MUTATION = gql`
  mutation DeleteSRTAgency($deleteSrtAgencyId: Int!) {
    deleteSRTAgency(id: $deleteSrtAgencyId)
  }
`

export const UPDATE_ACCOUNTAGENCY_MUTATION = gql`
  mutation UpdateAccountAgency($updateAccountAgencyId: Int!, $input: AccountAgencyInput) {
    updateAccountAgency(id: $updateAccountAgencyId, input: $input) {
      account_agency_id
      agency_name
      abbreviation
      site_url
    }
  }
`

export const CREATE_ACCOUNTAGENCY_MUTATION = gql`
  mutation CreateAccountAgency($input: AccountAgencyInput) {
    createAccountAgency(input: $input) {
      account_agency_id
      agency_name
      abbreviation
      site_url
    }
  }
`

export const DELETE_ACCOUNTAGENCY_MUTATION = gql`
  mutation DeleteAccountAgency($deleteAccountAgencyId: Int!) {
    deleteAccountAgency(id: $deleteAccountAgencyId)
  }
`

export const UPDATE_PAYMENTAGENCY_MUTATION = gql`
  mutation UpdatePaymentAgency($updatePaymentAgencyId: Int!, $input: PaymentAgencyInput) {
    updatePaymentAgency(id: $updatePaymentAgencyId, input: $input) {
      payment_agency_id
      agency_name
      abbreviation
      site_url
    }
  }
`

export const CREATE_PAYMENTAGENCY_MUTATION = gql`
  mutation CreatePaymentAgency($input: PaymentAgencyInput) {
    createPaymentAgency(input: $input) {
      payment_agency_id
      agency_name
      abbreviation
      site_url
    }
  }
`

export const DELETE_PAYMENTAGENCY_MUTATION = gql`
  mutation DeletePaymentAgency($deletePaymentAgencyId: Int!) {
    deletePaymentAgency(id: $deletePaymentAgencyId)
  }
`

export const UPDATE_AGENCYACCOUNT_MUTATION = gql`
  mutation UpdateAgencyAccount($updateAgencyAccountId: Int!, $input: AgencyAccountInput) {
    updateAgencyAccount(id: $updateAgencyAccountId, input: $input) {
      account_id
      account_name
      username
      password
    }
  }
`

export const CREATE_AGENCYACCOUNT_MUTATION = gql`
  mutation CreateAgencyAccount($input: AgencyAccountInput) {
    createAgencyAccount(input: $input) {
      account_id
      account_name
      username
      password
    }
  }
`

export const DELETE_AGENCYACCOUNT_MUTATION = gql`
  mutation DeleteAgencyAccount($deleteAgencyAccountId: Int!) {
    deleteAgencyAccount(id: $deleteAgencyAccountId)
  }
`

export const UPDATE_AGENCYCOVERAGE_MUTATION = gql`
  mutation UpdateAccountAgencyCoverage(
    $updateAccountAgencyCoverageId: Int!
    $input: AccountAgencyCoverageInput
  ) {
    updateAccountAgencyCoverage(id: $updateAccountAgencyCoverageId, input: $input) {
      account_agency_coverage_id
      account_agency_id
    }
  }
`

export const CREATE_AGENCYCOVERAGE_MUTATION = gql`
  mutation CreateAccountAgencyCoverage($input: AccountAgencyCoverageInput) {
    createAccountAgencyCoverage(input: $input) {
      account_agency_coverage_id
      account_agency_id
    }
  }
`

export const DELETE_AGENCYCOVERAGE_MUTATION = gql`
  mutation DeleteAccountAgencyCoverage($deleteAccountAgencyCoverageId: Int!) {
    deleteAccountAgencyCoverage(id: $deleteAccountAgencyCoverageId)
  }
`

//AGENCY
export const ALL_ACOOUNTCOVERAGE_QUERY = gql`
  query AccountAgencyCoverages {
    accountAgencyCoverages {
      account_agency_coverage_id
      account_agency_id
      agency_id {
        agency_name
        abbreviation
        site_url
        state_id {
          state_name
          abbreviation
          tax_amount
        }
      }
    }
  }
`

export const ALL_STEPS_QUERY = gql`
  query PaymentSteps {
    paymentSteps {
      step_id
      step_description
    }
  }
`

export const ALL_CLIENT_FILES_QUERY = gql`
  query ClientFilesServerSide($limit: Int!, $offset: Int!, $filter: clientFileFilter) {
    clientFilesServerSide(limit: $limit, offset: $offset, filter: $filter) {
      count
      data {
        id

        original_name
        asset_file_name

        upload_month
        upload_datetime
        createdAt
        __typename
        category {
          file_category_name
        }
        client {
          organization
        }
      }
      __typename
    }
  }
`
export const ALL_PAYMENT_VERIFICATION_QUERY = gql`
  query PaymentSrtVerification(
    $offset: Int!
    $limit: Int!
    $filterSrt: paymentSrtFilter
    $filterScan: scanFilter
  ) {
    paymentSrtVerification(
      offset: $offset
      limit: $limit
      filterSrt: $filterSrt
      filterScan: $filterScan
    ) {
      srt_id
      license_plate
      lp_state {
        state_name
      }
      trxn_datetime
      exit_lane
      location
      account_id
      reference_id
      invoice_id
      violation_id
      amount_due
      due_date
      pin_no
      scan_date
      unit_id
      name
      address
      status
      agency {
        agency_name
      }
      infration_date
      violation_status
      citation_case_no
      client_id {
        organization
        phone
        org_email
      }
      scan_id {
        scan_id
        srt_doc_file
        agency_invoice_status
        scan_doc_file
        scan_doc_name
        scan_type
      }
      validatedAt
      amount_site
      total_paid
      collection_amount
      date_paid
      name_on_invoice
      card_number
      notes
      auth_code

      payment_status
    }
  }
`
export const FILTER_PAYMENT_VERIFICATION_QUERY = gql`
  query PaymentSrtVerification($offset: Int!, $limit: Int!, $filterSrt: srtFilter) {
    paymentSrtVerification(offset: $offset, limit: $limit, filterSrt: $filterSrt) {
      srt_id
      license_plate
      lp_state {
        state_name
      }
      trxn_datetime
      exit_lane
      location
      account_id
      reference_id
      invoice_id
      violation_id
      amount_due
      due_date
      pin_no
      scan_date
      unit_id
      name
      address
      status
      agency {
        agency_name
      }
      infration_date
      violation_status
      citation_case_no
      client_id {
        organization
        phone
        org_email
      }
      scan_id {
        srt_doc_file
        agency_invoice_status
        scan_doc_file
        scan_doc_name
        scan_type
      }
      validatedAt
      amount_site
      total_paid
      collection_amount
      date_paid
      name_on_invoice
      card_number
      notes
      auth_code

      payment_status
    }
  }
`
export const FILTER_CLIENTFILES_QUERY = gql`
  query ClientFiles($limit: Int!, $offset: Int!, $fileFilter: fileFilter) {
    clientFiles(limit: $limit, offset: $offset, fileFilter: $fileFilter) {
      file_id
      client_id {
        organization
        phone
        org_email
      }
      original_name
      asset_file_name
      upload_month
      upload_datetime
      status
      createdAt
      updatedAt
      category_id {
        file_category_id
        file_category_name
        editable
      }
    }
  }
`

export const UPDATE_SRT_PAYMENT = gql`
  mutation UpdatePaymentSrts($srtId: ID!, $input: updatepaymentsrts) {
    updatePaymentSrts(srt_id: $srtId, input: $input) {
      srt_id
      license_plate
      trxn_datetime
      exit_lane
      location
      account_id
      reference_id
      invoice_id
      violation_id
      amount_due
      due_date
      pin_no
      scan_date
      unit_id
      name
      address
      status
      payment_status
    }
  }
`

export const ALL_USER_INSIGHTS = gql`
  query AllUsersInsights {
    allUsersInsights {
      totalInvoiceCount
      weekNumber
      user {
        first_name
        last_name
      }
      scanCount
    }
  }
`

export const DOMANT_AGENCIES = gql`
  query DomartSrtAgencies {
    domartSrtAgencies {
      abbreviation
      agency_name
      srt_agency_id
    }
  }
`

export const SRT_PRIORITY = gql`
  query SrtsPriority($limit: Int!, $offset: Int!) {
    srtsPriority(limit: $limit, offset: $offset) {
      count
      data {
        srt_id
        amount_due
        due_date
        license_plate
        trxn_datetime
        agency {
          agency_name
        }
        lp_state {
          state_name
        }
        scan_id {
          scan_id
        }
      }
    }
  }
`

export const AGENCY_PERSRTCOUNT = gql`
  query AgencyPerSrtCount {
    agencyPerSrtCount {
      month
      srtAgency {
        srt_agency_id
        agency_name
        abbreviation
        agency_id {
          agency_name
        }
        countofSrt
        totalAmount
      }
    }
  }
`

export const SRT_IDENTIFY = gql`
  query Srt($srtId: Int!) {
    srt(srtId: $srtId) {
      srt_id
      license_plate
      trxn_datetime
      exit_lane
      location
      account_id
      reference_id
      invoice_id
      violation_id
      amount_due
      due_date
      pin_no
      scan_date
      unique_id
      transaction_id
      message
      unit_id
      name
      address
      status
      infration_date
      violation_status
      citation_case_no
      client_id {
        organization
        phone
        org_email
      }
      scan_id {
        scan_id
        scan_doc_name
        scan_status
        srt_status
      }
    }
  }
`

export const ONEPAYMENT_SRT = gql`
  query OnePaymentSrtVerification($srtId: ID!) {
    onePaymentSrtVerification(srt_id: $srtId) {
      srt_id
      license_plate
      lp_state {
        state_name
      }
      trxn_datetime
      exit_lane
      location
      account_id
      reference_id
      invoice_id
      violation_id
      amount_due
      due_date
      pin_no
      scan_date
      unit_id
      name
      address
      status
      agency {
        agency_name
      }
      infration_date
      violation_status
      citation_case_no
      client_id {
        organization
        phone
        org_email
      }
      scan_id {
        srt_doc_file
        agency_invoice_status
        scan_doc_file
        scan_doc_name
        scan_type
      }
      validatedAt
      amount_site
      total_paid
      collection_amount
      date_paid
      name_on_invoice
      card_number
      notes
      auth_code

      payment_status
    }
  }
`

export const MARKASPAID = gql`
  mutation MarkAsPaid($srtId: ID!) {
    markAsPaid(srt_id: $srtId) {
      srt_id
      license_plate
      trxn_datetime
      exit_lane
      location
      account_id
      reference_id
      invoice_id
      violation_id
      amount_due
      due_date
      pin_no
      scan_date
      unit_id
      name
      address
      payment_status
    }
  }
`

export const DASHBOARD_INSIGHTS = gql`
  query SrtsPriority($limit: Int!, $offset: Int!) {
    srtsPriority(limit: $limit, offset: $offset) {
      count
      data {
        srt_id
        license_plate
        trxn_datetime
        amount_due
        due_date
        agency {
          agency_name
        }
        lp_state {
          state_name
        }
        scan_id {
          scan_id
        }
      }
    }

    domartSrtAgencies {
      abbreviation
      agency_name
      srt_agency_id
    }
  }
`
export const DASHBOARD_INSIGHTS2 = gql`
  query ScanPriorityServerSide($limit: Int!, $offset: Int!, $search: scanFilter) {
    scanPriorityServerSide(limit: $limit, offset: $offset, search: $search) {
      count
      filteredCount
      data {
        scan_id
        scanner
        agency_invoice_status
        scan_doc_file
        scan_doc_name
        no_invoices
        scan_status
        srt_status
        processor {
          first_name
          last_name
        }
        validator {
          first_name
          last_name
        }
        picked_date
        processed_date
        scan_type
        createdAt
      }
    }
  }
`

//SRT VALIDATION BY UNIQUE ID
export const EDIT_SRT_VALIDATION = gql`
  mutation UpdateSrtUnique($updateSrtUniqueId: Int!, $input: SrtInput) {
    updateSrtUnique(id: $updateSrtUniqueId, input: $input) {
      account_id
      address

      citation_case_no
      amount_due
    }
  }
`
export const SRT_VALIDATED = gql`
  query SrtsuniqueidValidate($limit: Int!, $offset: Int!, $filterScan: scanFilter) {
    srtsValidated(limit: $limit, offset: $offset, filterScan: $filterScan) {
      srt_id
      license_plate

      trxn_datetime
      exit_lane
      location
      account_id
      reference_id
      invoice_id
      violation_id
      amount_due
      due_date
      pin_no
      scan_date
      unique_id
      transaction_id
      message
      unit_id
      name
      address
      status

      infration_date
      violation_status
      citation_case_no
      client_id {
        organization
        phone
        org_email
      }
      agency {
        agency_name
        agency_id {
          agency_id
        }
      }
      lp_state {
        state_name
        state_id
      }
      scan_id {
        scan_id
      }
    }
  }
`

export const DELAYED_SCANS = gql`
  query TurnOverAssignedScans($limit: Int, $offset: Int) {
    turnOverAssignedScans(limit: $limit, offset: $offset) {
      reason
      status
      scan_id {
        scan_id
        scan_doc_file
        scan_doc_name
        client_id {
          org_email
          id
          organization
        }
        createdAt
        scan_type
        no_invoices
        processor {
          first_name
          last_name
        }
        picked_date
      }
      createdAt
      assigned_by {
        first_name
      }
      user_id {
        first_name
      }
      assigned_id
    }
  }
`

export const ONE_SCAN = gql`
  query DailyScan($dailyScanId: Int!) {
    dailyScan(dailyScanId: $dailyScanId) {
      scan_id
      client_id {
        organization
        phone
        org_email
      }
      scanner
      agency_invoice_status
      scan_doc_file
      scan_doc_name
      file_url
      no_invoices
      scan_status
      processor {
        first_name
        last_name
      }
      picked_date
      processed_date
      user_id {
        first_name
        last_name
      }
      scan_type
      createdAt
    }
  }
`

export const SRT_SERVER_QUERY = gql`
  query SrtsServerSide(
    $limit: Int!
    $offset: Int!
    $filterScan: scanFilter
    $filterSrt: srtFilter
  ) {
    srtsServerSide(limit: $limit, offset: $offset, filterScan: $filterScan, filterSrt: $filterSrt) {
      count
      filteredCount
      data {
        srt_id
        license_plate
        lp_state {
          state_name
          abbreviation
        }
        trxn_datetime
        exit_lane
        location
        amount_due
        due_date
        scan_date
        scan_id {
          scan_id
        }
        account_id
        address
        agency {
          agency_id {
            agency_name
            abbreviation
            site_url
          }
        }
        bill_no
        case_no
        citation_case_no
        citation_no
        code_one
        code_two
        infration_date
        invoice_id
        message
        name
        page_no
        password
        pin_no
        posted_date
        reference_id
        source
        state
        notice_no
        status
        sub_dept_id
        transaction_id
        unit_id
        unique_id
        violation_id
        violation_status
      }
    }
  }
`

export const SRTVALIDATION_SERVER_QUERY = gql`
  query SrtsValidatedServerSide(
    $limit: Int!
    $offset: Int!
    $filterScan: scanFilter
    $filterSrt: srtFilter
    $searchParams: String
    $orderBy: [[String]]
  ) {
    srtsValidatedServerSide(
      limit: $limit
      offset: $offset
      filterScan: $filterScan
      filterSrt: $filterSrt
      searchParams: $searchParams
      orderBy: $orderBy
    ) {
      count
      filteredCount
      data {
        srt_id
        license_plate
        lp_state {
          name
          code
        }
        trxn_datetime
        exit_lane
        location
        account_id
        reference_id
        invoice_id
        violation_id
        amount_due
        due_date
        pin_no
        scan_date
        unique_id
        transaction_id
        message
        dept_id {
          dept_name
        }
        sub_dept_id
        unit_id
        name
        address
        status
        agency {
          agency_name
        }
        state
        infration_date
        violation_status
        citation_case_no
        case_no
        notice_no
        citation_no
        password
        client_id {
          organization
        }
        scan_id {
          scan_doc_name
        }
        code_one
        code_two
        bill_no
        page_no
        source
      }
    }
  }
`

export const SRTUNIQUEVALIDATION_SERVER_QUERY = gql`
  query SrtsUniqueIdValidateServerSide(
    $filterScan: scanFilter
    $filterSrt: srtFilter
    $limit: Int!
    $offset: Int!
  ) {
    srtsUniqueIdValidateServerSide(
      filterScan: $filterScan
      filterSrt: $filterSrt
      limit: $limit
      offset: $offset
    ) {
      count
      filteredCount
      data {
        srt_id
        license_plate
        lp_state {
          state_id
          state_name
          abbreviation
        }
        trxn_datetime
        exit_lane
        location
        amount_due
        due_date
        scan_date
        scan_id {
          scan_id
          client_id {
            organization
          }
          scan_doc_file
          scan_doc_name
          agency_invoice_status
          scan_status
          no_invoices
          scan_type
          createdAt
        }
        message
        agency {
          srt_agency_id
          agency_name
          abbreviation
        }
        code_two
        code_one
        bill_no
        pin_no
        violation_id
        reference_id
        invoice_id
        account_id
        citation_no
        password
        case_no
        notice_no
        page_no
        unit_id
        unique_id
        transaction_id
        posted_date
        infration_date
        citation_case_no
        address
      }
    }
  }
`

export const SRTRAW_SERVER_QUERY = gql`
  query SrtRawsServerSide(
    $limit: Int!
    $offset: Int!
    $filterScan: scanFilter
    $searchParams: String
    $orderBy: [[String]]
  ) {
    srtRawsServerSide(
      limit: $limit
      offset: $offset
      filterScan: $filterScan
      searchParams: $searchParams
      orderBy: $orderBy
    ) {
      count
      filteredCount
      data {
        srt_raw_id
        license_plate
        lp_state
        trxn_datetime
        exit_lane
        location
        amount_due
        due_date
        agency
        client_id {
          organization
          phone
          org_email
        }
        violation_id
        reference_id
        account_id
        scan_id {
          scan_id
          scan_doc_name
          scan_doc_file
        }
        scan_date
        message
        pin_no
        bill_no
        code_two
        code_one
        invoice_id
        citation_no
        password
        case_no
        notice_no
        page_no
        posted_date
        address
        unit_id
      }
    }
  }
`

export const DAILYSCAN_SERVER_QUERY = gql`
  query DailyScansServerSide(
    $startDate: String
    $endDate: String
    $searchParams: String
    $search: scanFilter
    $day: String
    $orderBy: [[String]]
    $limit: Int!
    $offset: Int!
  ) {
    dailyScansServerSide(
      startDate: $startDate
      endDate: $endDate
      searchParams: $searchParams
      search: $search
      day: $day
      orderBy: $orderBy
      limit: $limit
      offset: $offset
    ) {
      count
      filteredCount
      data {
        scan_id
        client_id {
          id
          organization
          phone
          org_email
        }
        scanner
        agency_invoice_status
        scan_doc_file
        scan_doc_name
        no_invoices
        scan_status
        file_url
        validator {
          id
          first_name
          last_name
        }
        picked_date
        processed_date
        scan_type
        srt_amount
        createdAt
        updatedAt
        processor {
          first_name
          last_name
        }
      }
    }
  }
`

export const DISTINCT_DAILYSCAN_SERVER_QUERY = gql`
  query DistinctDailyScanServerSide(
    $search: scanFilter
    $startDate: String
    $endDate: String
    $limit: Int!
    $offset: Int!
  ) {
    distinctDailyScanServerSide(
      search: $search
      startDate: $startDate
      endDate: $endDate
      limit: $limit
      offset: $offset
    ) {
      count
      filteredCount
      data {
        scan_id
        scanner
        agency_invoice_status
        scan_doc_file
        scan_doc_name
        no_invoices
        scan_status
        processor {
          first_name
          last_name
          id
        }
        validator {
          first_name
          last_name
          id
        }
        picked_date
        processed_date
        createdAt
        scan_type
        client_id {
          org_email
          address
          organization
        }
      }
    }
  }
`
export const SRT_PRIORITY_SERVER_QUERY = gql`
  query ScanPriorityServerSide($limit: Int!, $offset: Int!, $search: scanFilter) {
    scanPriorityServerSide(limit: $limit, offset: $offset, search: $search) {
      count
      filteredCount
      data {
        scan_id
        scanner
        agency_invoice_status
        scan_doc_file
        scan_doc_name
        no_invoices
        scan_status
        processor {
          first_name
          last_name
        }
        validator {
          first_name
          last_name
        }
        picked_date
        processed_date
        scan_type
        createdAt
      }
    }
  }
`

export const PAYSRTVERIFY_SERVER_QUERY = gql`
  query PaymentSrtVerificationServerSide(
    $offset: Int!
    $limit: Int!
    $filterScan: scanFilter
    $filterSrt: paymentSrtFilter
  ) {
    paymentSrtVerificationServerSide(
      offset: $offset
      limit: $limit
      filterScan: $filterScan
      filterSrt: $filterSrt
    ) {
      count
      filteredCount
      data {
        srt_id
        license_plate
        lp_state {
          state_id
          state_name
          abbreviation
        }
        trxn_datetime
        exit_lane
        location
        amount_due
        reference_id
        account_id
        violation_id
        pin_no
        due_date
        agency {
          agency_name
          srt_agency_id
          abbreviation
        }
        scan_id {
          scan_id
          scan_doc_name
          scan_doc_file
        }
        amount_site
        total_paid
        collection_amount
        date_paid
        payment_status
        scan_date
        bill_no
        code_one
        code_two
        invoice_id
        citation_no
        password
        case_no
        notice_no
      }
    }
  }
`

export const ALL_CLIENTS_QUERY = gql`
  query Clients($filter: clientFilter, $limit: Int!, $offset: Int!) {
    clients(filter: $filter, limit: $limit, offset: $offset) {
      data {
        id
        address
        mail_address
        postal_code
        phone
        org_email
        sec_email
        organization
        po_box
        scac
        logo
        client_status
        sub_dept_exist
        demo_acc
        has_sister
        client_type
        creditCardCount
        vehiclesCount
        transponderRequests
        accountBalance
      }
      count
    }
  }
`

export const ADD_CLIENT_MUTATION = gql`
  mutation AddClient($input: ClientsInput) {
    addClient(input: $input) {
      id
      address
      phone
      org_email
      organization
    }
  }
`

export const NEWSCAN_QUERY = gql`
  query NewDailyScans($limit: Int!, $offset: Int!, $search: scanFilter, $searchParams: String) {
    newDailyScans(limit: $limit, offset: $offset, search: $search, searchParams: $searchParams) {
      count
      filteredCount
      data {
        scan_id
        client_id {
          id
          org_email
          organization
        }
        scanner
        agency_invoice_status
        scan_doc_file
        scan_doc_name
        no_invoices
        scan_status
        srt_status
        scan_type
        createdAt
        processor {
          first_name
          last_name
        }
      }
    }
  }
`

export const ASSIGN_CLIENT_MUTATION = gql`
  mutation AssignClientToEmployee($employeeId: ID!, $clientId: ID!) {
    assignClientToEmployee(employeeId: $employeeId, clientId: $clientId) {
      id
    }
  }
`
export const ASSIGN_CLIENTS_MUTATION = gql`
  mutation AssignClientsToEmployees($employeeId: ID!, $clientIds: [ID]!) {
    assignClientsToEmployees(employeeId: $employeeId, clientIds: $clientIds) {
      id
    }
  }
`

export const MULTIPLE_ASSIGN_MUTATION = gql`
  mutation MultipleAssignScans($userId: ID!, $scanIds: [ID]!) {
    multipleAssignScans(userId: $userId, scanIds: $scanIds) {
      assigned_id
    }
  }
`

export const ASSIGNED_SCANS_QUERY = gql`
  query AssignedScansServerSide($filter: assignScanFilter, $offset: Int!, $limit: Int!) {
    assignedScansServerSide(filter: $filter, offset: $offset, limit: $limit) {
      count
      filteredCount
      data {
        scan_id {
          scan_id
          client_id {
            organization
            phone
            org_email
            id
          }
          scanner
          agency_invoice_status
          scan_doc_file
          scan_doc_name
          no_invoices
          scan_status
          processor {
            id
            first_name
            last_name
          }
          validator {
            id
            first_name
            last_name
          }
          picked_date
          processed_date
          srt_amount
          createdAt
        }
        status
      }
    }
  }
`

export const NEW_ASSIGNED_SCANS_QUERY = gql`
  query NewAssignedDailyScans(
    $limit: Int!
    $offset: Int!
    $search: scanFilter
    $searchParams: String
  ) {
    newAssignedDailyScans(
      limit: $limit
      offset: $offset
      search: $search
      searchParams: $searchParams
    ) {
      count
      filteredCount
      data {
        scan_id
        client_id {
          organization
          phone
          org_email
          id
        }
        scanner
        agency_invoice_status
        scan_doc_file
        scan_doc_name
        no_invoices
        scan_status
        processor {
          id
          first_name
          last_name
        }
        validator {
          id
          first_name
          last_name
        }
        picked_date
        processed_date
        srt_amount
        createdAt
        scan_type
      }
    }
  }
`
export const UNASSIGN_MUTATION = gql`
  mutation UnassignScan($scanId: ID!, $reason: String!) {
    unassignScan(scanId: $scanId, reason: $reason) {
      assigned_id

      status
      reason
      createdAt
      updatedAt
    }
  }
`

export const CLIENT_DEPT_QUERY = gql`
  query ClientDepartments($clientId: ID!) {
    clientDepartments(clientId: $clientId) {
      id
      dept_address
      dept_phone
      dept_email
      dept_name
      category
      dept_status
    }
  }
`

export const REQUEST_RESETPASSWORD_MUTATION = gql`
  mutation RequestResetPassword($email: String!) {
    requestResetPassword(email: $email) {
      userId
      username
      email
    }
  }
`

export const RESETPASSWORD_MUTATION = gql`
  mutation ResetPassword(
    $code: String!
    $userId: String!
    $confirmPassword: String!
    $password: String!
  ) {
    resetPassword(
      code: $code
      userId: $userId
      confirmPassword: $confirmPassword
      password: $password
    ) {
      email
      userId
      username
    }
  }
`

export const ROLLBACK_MUTATION = gql`
  mutation RollBackSrt($scanId: ID!, $reason: String!) {
    rollBackSrt(scan_id: $scanId, reason: $reason) {
      scan_doc_file
      scan_id
    }
  }
`

export const ASSIGN_VALIDATOR_MUTATION = gql`
  mutation Mutation($employeeId: ID!, $scanId: ID!) {
    assignValidator(employeeId: $employeeId, scanId: $scanId) {
      scan_id
    }
  }
`

export const SELF_ASSIGN_VALIDATOR_MUTATION = gql`
  mutation Mutation($scanId: ID!) {
    selfAssignValidator(scanId: $scanId) {
      scan_id
    }
  }
`

export const AWAIT_VALIDATOR_QUERY = gql`
  query AwaitingValidationDailyScans(
    $search: scanFilter
    $limit: Int!
    $offset: Int!
    $searchParams: String
  ) {
    awaitingValidationDailyScans(
      search: $search
      limit: $limit
      offset: $offset
      searchParams: $searchParams
    ) {
      count
      filteredCount
      data {
        scan_id
        client_id {
          organization
          phone
          org_email
        }
        scanner
        agency_invoice_status
        scan_doc_file
        scan_doc_name
        no_invoices
        scan_status
        processor {
          id
          first_name
          last_name
        }
        validator {
          id
          first_name
          last_name
        }
        picked_date
        processed_date
        scan_type
        srt_amount
        createdAt
        updatedAt
      }
    }
  }
`

export const UNIQUIDWITHOUT_QUERY = gql`
  query ScansWithoutUniqueIds($limit: Int!, $offset: Int!, $search: scanFilter) {
    scansWithoutUniqueIds(limit: $limit, offset: $offset, search: $search) {
      count
      filteredCount
      data {
        client_id {
          organization
        }
        scan_doc_file
        scan_doc_name
        createdAt
        no_invoices
        scan_id
        scan_type
      }
    }
  }
`

export const INSIGHTS_QUERY = gql`
  query TransactionCountPerAgency {
    transactionCountPerAgency {
      labels
      data {
        label
        data
        borderColor
        pointBackgroundColor
        fill
      }
    }
  }
`
export const MISSING_INFORMATION_QUERY = gql`
  query MissingTransaction(
    $limit: Int!
    $offset: Int!
    $filter: srtFilter
    $searchParams: String
    $orderBy: [[String]]
  ) {
    missingTransaction(
      limit: $limit
      offset: $offset
      filter: $filter
      searchParams: $searchParams
      orderBy: $orderBy
    ) {
      data {
        id
        license_plate
        lp_state {
          state_name
          state_id
          abbreviation
        }
        trxn_datetime
        exit_lane
        location
        account_id
        reference_id
        invoice_id
        violation_id
        amount_due
        due_date
        pin_no
        scan_date
        dept_id {
          id
          client {
            org_email
            organization
          }
          dept_name
          dept_email
        }
        agency {
          abbreviation
          agency_name
        }
        infration_date
        citation_case_no
        violation_status

        scan_id {
          scan_doc_name
          scan_doc_file
          scan_id
        }
        message
      }
      count
      filteredCount
    }
  }
`

export const DISTINCT_LPS_QUERY = gql`
  query ExampleQuery($search: distinctFilter, $offset: Int, $limit: Int) {
    distinctLicensePlateServerside(search: $search, offset: $offset, limit: $limit) {
      count
      data {
        license_plate
        lp_state
        agency
        reference_id
        account_id
        invoice_id
        violation_id
        pin_no
      }
      filteredCount
    }
  }
`

export const ONLINETRANSACTIONSINSIGHTS_QUERY = gql`
  query OnlineTransactionsInsights {
    onlineTransactionsInsights {
      count
      withinSLA
      outsideSLA
      unInvoicedAmount
      withinSlaPercentage
      outsideSlaPercentage
    }
  }
`
export const SCANNEDTRANSINSIGHTS_QUERY = gql`
  query ScannedInvoiceTransactionsInsights {
    scannedInvoiceTransactionsInsights {
      count
      withinSLA
      outsideSLA
      unInvoicedAmount
      withinSlaPercentage
      outsideSlaPercentage
    }
  }
`
export const SFTPFileUpload = gql`
  mutation SftpFileUpload($input: SFTPUploadInput!) {
    sftpFileUpload(input: $input)
  }
`
export const LIST_SFTP_FILE = gql`
  query ListRemoteFiles($folderName: String) {
    listRemoteFiles(folder_name: $folderName) {
      name
      size
      createdAt
    }
  }
`
export const ARCHIVE_MUTATION = gql`
  mutation ArchiveScan($scanId: ID!, $reason: String!) {
    archiveScan(scan_id: $scanId, reason: $reason) {
      scan_id
      scan_doc_name
      scan_doc_file
      createdAt
    }
  }
`
export const UNARCHIVE_MUTATION = gql`
  mutation UnArchiveScan($scanId: ID!) {
    unArchiveScan(scan_id: $scanId) {
      scan_id
      scan_doc_name
      scan_doc_file
    }
  }
`

export const ADMIN_DAILYSCAN_SERVER_QUERY = gql`
  query DailyScansServerSide(
    $limit: Int!
    $offset: Int!
    $startDate: String
    $endDate: String
    $searchParams: String
    $search: scanFilter
    $day: String
    $orderBy: [[String]]
  ) {
    dailyScans(
      limit: $limit
      offset: $offset
      startDate: $startDate
      endDate: $endDate
      searchParams: $searchParams
      search: $search
      day: $day
      orderBy: $orderBy
    ) {
      count
      filteredCount
      data {
        scan_id
        client_id {
          organization
          phone
          org_email
        }
        scanner
        agency_invoice_status
        scan_doc_file
        scan_doc_name
        no_invoices
        scan_status

        validator {
          id
          first_name
          last_name
        }
        picked_date
        processed_date
        scan_type
        srt_amount
        createdAt
        updatedAt
        processor {
          first_name
          last_name
        }
      }
    }
  }
`

export const SUB_DEPT_QUERY = gql`
  query SubDepartments($offset: Int, $limit: Int, $filter: subDepartmentFilter) {
    subDepartments(offset: $offset, limit: $limit, filter: $filter) {
      id
      name
      department {
        dept_name
        id
      }
      email
      phone
      address
      createdAt
      updatedAt
    }
  }
`

export const EDIT_UNIQUEID_MUTATION = gql`
  mutation Mutation($updateSrtUniqueId: Int!, $input: SrtInput) {
    updateSrtUnique(id: $updateSrtUniqueId, input: $input) {
      srt_id
    }
  }
`

export const AVAILABLE_SCANS_QUERY = gql`
  query AvailableDailyScans(
    $limit: Int!
    $offset: Int!
    $search: scanFilter
    $searchParams: String
    $orderBy: [[String]]
    $day: String
    $endDate: String
    $startDate: String
  ) {
    availableDailyScans(
      limit: $limit
      offset: $offset
      search: $search
      searchParams: $searchParams
      orderBy: $orderBy
      day: $day
      endDate: $endDate
      startDate: $startDate
    ) {
      count
      filteredCount
      data {
        scan_id
        client_id {
          organization
        }
        scanner
        agency_invoice_status
        scan_doc_file
        scan_doc_name
        no_invoices
        scan_status
        processor {
          first_name
          last_name
          phone_number
        }
        validator {
          first_name
          last_name
          phone_number
        }
        picked_date
        processed_date
        srt_doc_file
        srt_status
        srt_lp
        srt_amount
        scan_type
        createdAt
        updatedAt
      }
    }
  }
`

export const SEARCH_SCANS_QUERY = gql`
  query DailyScanStatus($searchParams: String!) {
    dailyScanStatus(searchParams: $searchParams) {
      count
      data {
        scan_id
        dept_id {
          dept_name
        }
        scan_doc_file
        scan_doc_name
        processor {
          first_name
          last_name
        }
        validator {
          first_name
          last_name
        }
        picked_date
        formattingErrorCount
        srtCount
        duplicateTransactionCount
        missingTransactionCount
        scan_status
        client_id {
          organization
        }
      }
    }
  }
`

export const DAILY_SCAN_REPORT_QUERY = gql`
  query DailyScanReport($offset: Int!, $limit: Int!, $searchParams: String, $day: String) {
    dailyScanReport(offset: $offset, limit: $limit, searchParams: $searchParams, day: $day) {
      count
      data {
        scan_status
        scan_doc_file
        scan_doc_name
        processor {
          last_name
          first_name
        }
        original_name
        client_id {
          organization
        }
        dept_id {
          dept_name
        }
        validator {
          last_name
          first_name
        }
        scan_id
        picked_date
      }
      countOfScans
      countOfScansArchived
      filteredCount
      countOfOnlineScans
      countOfRentals
    }
  }
`
export const MERGED_SRT_QUERY = gql`
  query MergedSrts($scanId: ID!) {
    mergedSrts(scan_id: $scanId) {
      count
      filteredCount
      data {
        srt_id
        license_plate
        lp_state {
          code
          name
          id
        }
        trxn_datetime
        exit_lane
        location
        account_id
        reference_id
        invoice_id
        violation_id
        amount_due
        due_date
        pin_no
        scan_date
        unique_id
        transaction_id
        name
        address
        status
        agency {
          abbreviation
          agency_name
          srt_agency_id
        }
        state
        infration_date
        violation_status
        citation_case_no
        case_no
        notice_no
        citation_no
        password
        client_id {
          id
          org_email
          organization
          phone
        }
        scan_id {
          scan_doc_name
          scan_doc_file
          srt_status
          scan_id
          scan_status
          scan_type
          agency_invoice_status
          client_id {
            id
            organization
            org_email
          }
        }
        code_one
        code_two
        bill_no
        page_no
        source
        createdAt
        posted_date
        unit_id
      }
    }
  }
`

export const SRT_MERGEUPDATE_MUTATION = gql`
  mutation UpdateMergeSrt($updateMergeSrtId: ID!, $source: String!, $input: SrtInput) {
    updateMergeSrt(id: $updateMergeSrtId, source: $source, input: $input) {
      scan_id {
        scan_doc_file
        scan_doc_name
      }
    }
  }
`

export const DAILY_USEREPORT_QUERY = gql`
  query DailyUserReport($employeeId: ID, $day: String) {
    dailyUserReport(employeeId: $employeeId, day: $day) {
      client_id {
        org_email
        organization
      }
      dept_id {
        dept_email
        dept_name
      }
      processor {
        first_name
        last_name
      }
      validator {
        first_name
        last_name
      }
      countOfLps
      scan_doc_name
      scan_doc_file
      excel_doc_file
      scan_id
    }
  }
`

export const VALIDATOR_BULK_MUTATION = gql`
  mutation MultipleAssignValidator($employeeId: ID!, $scanIds: [ID]!) {
    multipleAssignValidator(employeeId: $employeeId, scanIds: $scanIds) {
      scan_id
      scan_doc_name
      scan_doc_file
    }
  }
`

export const SCAN_QUERY = gql`
  query DailyScan($dailyScanId: Int!) {
    dailyScan(dailyScanId: $dailyScanId) {
      scan_doc_file
      scan_doc_name
    }
  }
`

export const MULTIPLE_UNASSIGN_MUTATION = gql`
  mutation MultipleUnassignScan($scanIds: [ID!]!, $reason: String!) {
    multipleUnassignScan(scanIds: $scanIds, reason: $reason) {
      assigned_id
      status
      reason
      createdAt
      updatedAt
    }
  }
`

//MUTATION FOR DELETE SCAN
export const SCAN_DELETE_MUTATION = gql`
  mutation DeleteDailyScan($deleteDailyScanId: Int!) {
    deleteDailyScan(id: $deleteDailyScanId)
  }
`

// CREATE_CITATIONAGENCY_MUTATION
export const CREATE_CITATIONAGENCY_MUTATION = gql`
  mutation CreateCitationAgency($input: SRTAgencyInput) {
    createCitationAgency(input: $input) {
      updatedAt
    }
  }
`

//users
export const USERS_QUERY = gql`
  query Users($offset: Int, $limit: Int) {
    users(offset: $offset, limit: $limit) {
      id
      first_name
      last_name
      username
      email
      date_of_birth
      gender
      location
      profile_picture
      phone_number
      postalCode
      zipCode
      city
      verifyString
      verifiedEmail
      verifiedPhone
      status
    }
  }
`

export const USER_GROUP_QUERY = gql`
  query UserGroups($offset: Int, $limit: Int) {
    userGroups(offset: $offset, limit: $limit) {
      id
      group_name
      createdAt
      updatedAt
    }
  }
`
export const USER_USER_GROUP_QUERY = gql`
  query UserUserGroups($offset: Int, $limit: Int, $filter: userUserGroupFilter) {
    userUserGroups(offset: $offset, limit: $limit, filter: $filter) {
      id
      user {
        id
        email
        first_name
        phone_number
        username
      }
      group {
        id
        group_name
      }
      createdAt
      updatedAt
    }
  }
`
//allsignups
export const ALL_SIGNUPS_QUERY = gql`
  query AllSignup($offset: Int!, $limit: Int!, $filter: signupFilter, $searchParams: String) {
    allSignup(offset: $offset, limit: $limit, filter: $filter, searchParams: $searchParams) {
      count
      data {
        id
        first_name
        last_name
        phone
        email
        company
        title
        status
        scac
        fleet_size
        country {
          id
          name
          code
        }
        address
        shipping_street
        shipping_city
        shipping_state {
          tax_rate
          name
          id
          code
          country {
            id
            name
            code
          }
        }
        shipping_zip_code
        createdAt
      }
      newSignupCount
      onBoardedCount
      declinedCount
    }
  }
`

//create signup
export const CREATE_SIGNUP_MUTATION = gql`
  mutation Signup($input: SignupInput) {
    signup(input: $input) {
      createdAt
    }
  }
`
//all transponders
export const ALL_TRANSPONDERS_QUERY = gql`
  query GetTransponders(
    $offset: Int!
    $limit: Int!
    $filter: TransponderFilter
    $searchParams: String
  ) {
    getTransponders(offset: $offset, limit: $limit, filter: $filter, searchParams: $searchParams) {
      count
      data {
        id
        account {
          account_type {
            id
            account_type
          }
          account_no
          account_name
          agency {
            id
            agency_name
            abbreviation
            prefix
            site_url
            transponder_length
          }
          id
        }
        location {
          color
          id
          location_name
          client {
            id
            org_email
            organization
            phone
          }
        }
        transponder_no
        transponder_id
        transponder_status {
          id
          transponder_status
        }
        preorder {
          first_sequence
          date_received
          batch_no
          id
          last_sequence
          quantity
        }
        request_status
        rma
        comment
        deactivation_date
        verified
        createdAt
        updatedAt
      }
    }
  }
`

export const DECLINE_SIGNUP = gql`
  mutation DeclineSignup($declineSignupId: ID!) {
    declineSignup(id: $declineSignupId) {
      updatedAt
    }
  }
`

export const ONBOARD_SIGNUP = gql`
  mutation OnBoardClient($signupId: ID!, $input: signupInputUpdate) {
    onBoardClient(signupId: $signupId, input: $input) {
      updatedAt
    }
  }
`

export const ONE_CLIENT = gql`
  query Client($clientId: ID!) {
    client(id: $clientId) {
      id
      address
      mail_address
      postal_code
      phone
      org_email
      sec_email
      organization
      po_box
      scac
      category {
        id
        category_name
      }
      logo
      client_status
      sub_dept_exist
      demo_acc
      has_sister
      client_type
      creditCardCount
      vehiclesCount
      transponderRequests
      accountBalance
      createdAt
      updatedAt
    }
  }
`

export const CLIENT_VEHICLES = gql`
  query Vehicles($offset: Int!, $limit: Int!, $filter: vehicleFilter, $searchParams: String) {
    vehicles(offset: $offset, limit: $limit, filter: $filter, searchParams: $searchParams) {
      count
      data {
        id
        license_plate
        model
        color
        make
        store
        location {
          id
          name
        }
        state {
          id
          name
          tax_rate
          code
        }
        year
        client {
          id
          org_email
          organization
        }
        axle {
          id
          axle_name
        }
        tag_id
        unit
        toll_tag
        toll_tag2
        transponder_id
        transponder_id2
        business_unit
        region
        vin_no
        asset_type
        equipment_id
        owner
        program
        purchase_type
        start_date
        end_date
        draft
        vehicle_status {
          id
          status
        }
        other_status
        department {
          id
          dept_name
        }
        foreignId
      }
      # allVehicleCount
      # activeVehicleCount
      # deactivatedVehicleCount
    }
  }
`

export const FULFILLMENT_QUERY = gql`
  query GetFulfillments(
    $offset: Int!
    $limit: Int!
    $searchParams: String
    $filter: FulfillmentFilter
  ) {
    getFulfillments(offset: $offset, limit: $limit, searchParams: $searchParams, filter: $filter) {
      count
      data {
        createdAt
        license_plate
        lp_state
        id
        request_status
        quantity
        shipment {
          drop_off
          drop_off_location
          id
          shipped_date
          shipping_address
          tracking_no
          weight
          courier {
            courier
            id
          }
        }
        vin_no
      }
    }
  }
`

export const CLIENT_TRANSACTIONS = gql`
  query Transactions(
    $offset: Int
    $limit: Int
    $filter: transactionFilter
    $searchParams: String
    $startDate: String
    $endDate: String
  ) {
    transactions(
      offset: $offset
      limit: $limit
      filter: $filter
      searchParams: $searchParams
      startDate: $startDate
      endDate: $endDate
    ) {
      count
      data {
        id
        license_plate
        state_code
        agency {
          abbreviation
          id
          name
        }
        exit_location
        exit_date_time
        exit_lane
        toll
        date_for
        unit
        client {
          id
          organization
          org_email
        }
        department {
          id
          dept_name
        }
        dispute
        reason
        account
        transponder
        transponder_id
        higher_rate
        savings
        transaction_type
        class
        fee
        total_amount
        date_for
        entry_lane
        entry_location
        createdAt
        updatedAt
      }
      # allTransactionCount
      # disputeCount
    }
  }
`

export const EDIT_VEHICLE_MUTATION = gql`
  mutation EditVehicle($id: ID!, $input: VehicleInput!) {
    editVehicle(id: $id, input: $input) {
      id
      license_plate
      axle_id
      state
      year
      make
      model
      toll_tag
      transponder_id
      toll_tag2
      transponder_id2
      vehicle_status_id
      vehicle_status {
        status
      }
    }
  }
`

export const GET_VEHICLE_STATUS = gql`
  query VehicleStatus {
    vehicleStatus {
      id
      status
    }
  }
`

export const GET_AXLES = gql`
  query Axles {
    axles {
      id
      name
    }
  }
`
// create agency
export const CREATE_AGENCY_MUTATION = gql`
  mutation CreateAgency($name: String!, $abbreviation: String!, $siteUrl: String!, $stateId: ID!) {
    createAgency(name: $name, abbreviation: $abbreviation, site_url: $siteUrl, stateId: $stateId) {
      createdAt
    }
  }
`

//create state
export const CREATE_STATE_MUTATION = gql`
  mutation AddState($name: String!, $code: String!, $country: ID!, $taxRate: Float!) {
    addState(name: $name, code: $code, country: $country, tax_rate: $taxRate) {
      createdAt
    }
  }
`
//get countries
export const GET_COUNTRIES = gql`
  query Countries($offset: Int, $limit: Int) {
    countries(offset: $offset, limit: $limit) {
      id
      name
      code
    }
  }
`

//create file category
export const CREATE_FILE_CATEGORY_MUTATION = gql`
  mutation CreateFileCategory($input: FileCategoryInput) {
    createFileCategory(input: $input) {
      editable
    }
  }
`

//create user group
export const CREATE_USER_GROUP_MUTATION = gql`
  mutation AddUserGroup($groupName: String!) {
    addUserGroup(group_name: $groupName) {
      createdAt
    }
  }
`

// create user user group
export const CREATE_USER_USER_GROUP_MUTATION = gql`
  mutation AddUserUserGroup($userId: ID!, $userGroupId: ID!) {
    addUserUserGroup(userId: $userId, user_group_id: $userGroupId) {
      createdAt
    }
  }
`

// create vehicle
export const CREATE_VEHICLE_MUTATION = gql`
  mutation AddVehicle($input: VehicleInput) {
    addVehicle(input: $input) {
      createdAt
    }
  }
`
//file categories

export const ALL_CATEGORIES_QUERY = gql`
  query FileCategories {
    fileCategories {
      file_category_id
      file_category_name
      editable
    }
  }
`
export const CREDIT_CARDS_QUERY = gql`
  query CreditCards($offset: Int!, $limit: Int!, $filter: CreditCardFilter) {
    creditCards(offset: $offset, limit: $limit, filter: $filter) {
      count
      data {
        id
        stripe_id

        last4
        exp_month
        exp_year
        brand
        default
        customer
        country
        address_zip
        object
        address_city
        address_country
        address_line1
        address_line1_check
        address_line2
        address_state
        address_zip_check
        cvc_check
        dynamic_last4
        name
        funding
        tokenization_method
        fingerprint
        wallet
        replenish_amount
        createdAt
        updatedAt
      }
    }
  }
`

export const CLIENT_NUMBERS_INSIGHTS = gql`
  query ClientNumbersInsights {
    clientNumbersInsights {
      inProgressCount
      activeCount
      refundCount
      collectionCount
      cancelationCount
      totalClientCount
      totalSignups
      declinedSignups
      onBoardedSignups
      newSignups
      totalTransactions
      totalSpend
      totalSavings
    }
  }
`

export const CLIENT_TYPE_QUERY = gql`
  query ClientTypes {
    clientTypes {
      id
      name
      description
      card_required
      fee
      min_amount_for_fee
      percentage
      createdAt
      updatedAt
    }
  }
`
