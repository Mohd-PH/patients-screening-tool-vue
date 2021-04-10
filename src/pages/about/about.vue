<template>
  <div class="accordion" role="tablist">
    <b-card no-body class="mb-1 mx-3">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-1 variant="info">Is this an endorsed tool by a medical group?</b-button>
      </b-card-header>
      <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>No, this is a self made project, it hasn't been endorsed by any one</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1 mx-3">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-2 variant="info">What topics does this tool cover?</b-button>
      </b-card-header>
      <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>In the time being, it covers the recommendations made by the USPSTF for the following topics:</b-card-text>
          <b-card-text>
            <ol>
              <li>Abdominal Aortic Aneurysm: Screening</li>
              <li>Abnormal Blood Glucose and Type 2 Diabetes Mellitus: Screening</li>
              <li>Breast Cancer: Screening</li>
              <li>Cervical Cancer: Screening</li>
              <li>Colorectal Cancer: Screening</li>
              <li>Depression in Adults: Screening</li>
              <li>Screening for Hepatitis B Virus Infection in Adolescents and Adults</li>
              <li>Hepatitis C Virus Infection in Adolescents and Adults: Screening</li>
              <li>High Blood Pressure in Adults: Screening</li>
              <li>Lung Cancer: Screening</li>
              <li>Osteoporosis to Prevent Fractures: Screening</li>
              <li>Prostate Cancer: Screening</li>
              <li>Unhealthy Drug Use: Screening</li>
            </ol>
          </b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1 mx-3">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-3 variant="info">What recommendation grades does it cover? and what do they mean?</b-button>
      </b-card-header>
      <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>In the time being, it covers the recommendations made by the USPSTF grade A,B and C:</b-card-text>
          <b-card-text>
            <ol type="A">
              <li>The USPSTF recommends the service. There is high certainty that the net benefit is substantial.</li>
              <li>The USPSTF recommends the service. There is high certainty that the net benefit is moderate or there is moderate certainty that the net benefit is moderate to substantial.</li>
              <li>The USPSTF recommends selectively offering or providing this service to individual patients based on professional judgment and patient preferences. There is at least moderate certainty that the net benefit is small.</li>
            </ol>
          </b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1 mx-3">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-4 variant="info">Does this tool collect any data?</b-button>
      </b-card-header>
      <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>No it does NOT collect any data, it works entirely on the browser without the need to reach for a server</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1 mx-3">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-5 variant="info">Does this tool cover pregnant patients?</b-button>
      </b-card-header>
      <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>In the time being, no</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style>

</style>
