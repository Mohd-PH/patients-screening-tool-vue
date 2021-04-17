module.exports = {
  colorectalCancer () {
    if (!this.patientsInformationData) return false
    if (this.patientsInformationData.age >= 50 && this.patientsInformationData.age <= 75) {
      return {
        disease: 'Colorectal cancer',
        organization: 'U.S. Preventive Services Task Force',
        link: 'https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/colorectal-cancer-screening',
        grade: 'A',
        recommendation: `The USPSTF recommends screening for colorectal cancer starting at age 50 years and continuing until age 75 years.

The risks and benefits of different screening methods vary. refer to the link for more information`,
        date: '15/06/2016'
      }
    } else if (this.patientsInformationData.age >= 76 && this.patientsInformationData.age <= 85) {
      return {
        disease: 'Colorectal cancer',
        organization: 'U.S. Preventive Services Task Force',
        link: 'https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/colorectal-cancer-screening',
        grade: 'C',
        recommendation: `The decision to screen for colorectal cancer in adults aged 76 to 85 years should be an individual one, taking into account the patient's overall health and prior screening history.

Adults in this age group who have never been screened for colorectal cancer are more likely to benefit.

Screening would be most appropriate among adults who 1) are healthy enough to undergo treatment if colorectal cancer is detected and 2) do not have comorbid conditions that would significantly limit their life expectancy.`,
        date: '15/06/2016'
      }
    } else {
      return false
    }
  },
  breastCancer () {
    if (!this.patientsInformationData) return false
    //  No screening recommendations for males
    if (this.patientsInformationData.gender === 'Male') return false
    if (this.patientsInformationData.age >= 50 && this.patientsInformationData.age <= 74) {
      return {
        disease: 'Breast cancer',
        organization: 'U.S. Preventive Services Task Force',
        link: 'https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/breast-cancer-screening',
        grade: 'B',
        recommendation: `The USPSTF recommends biennial screening mammography for women aged 50 to 74 years.`,
        date: '11/01/2016'
      }
    } else if (this.patientsInformationData.age >= 40 && this.patientsInformationData.age <= 49) {
      return {
        disease: 'Breast cancer',
        organization: 'U.S. Preventive Services Task Force',
        link: 'https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/breast-cancer-screening',
        grade: 'C',
        recommendation: `The decision to start screening mammography in women prior to age 50 years should be an individual one. Women who place a higher value on the potential benefit than the potential harms may choose to begin biennial screening between the ages of 40 and 49 years.

. For women who are at average risk for breast cancer, most of the benefit of mammography results from biennial screening during ages 50 to 74 years. Of all of the age groups, women aged 60 to 69 years are most likely to avoid breast cancer death through mammography screening. While screening mammography in women aged 40 to 49 years may reduce the risk for breast cancer death, the number of deaths averted is smaller than that in older women and the number of false-positive results and unnecessary biopsies is larger. The balance of benefits and harms is likely to improve as women move from their early to late 40s.

. In addition to false-positive results and unnecessary biopsies, all women undergoing regular screening mammography are at risk for the diagnosis and treatment of noninvasive and invasive breast cancer that would otherwise not have become a threat to their health, or even apparent, during their lifetime (known as "overdiagnosis"). Beginning mammography screening at a younger age and screening more frequently may increase the risk for overdiagnosis and subsequent overtreatment.

. Women with a parent, sibling, or child with breast cancer are at higher risk for breast cancer and thus may benefit more than average-risk women from beginning screening in their 40s.

Refer to the link for more information for information on implementation of the C recommendation.`,
        date: '11/01/2016'
      }
    } else {
      return false
    }
  },
  prostateCancer () {
    if (!this.patientsInformationData) return false
    //  No screening recommendations for males
    if (this.patientsInformationData.gender === 'Female') return false
    if (this.patientsInformationData.age >= 55 && this.patientsInformationData.age <= 69) {
      return {
        disease: 'Prostate cancer',
        organization: 'U.S. Preventive Services Task Force',
        link: 'https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/prostate-cancer-screening',
        grade: 'C',
        recommendation: `For men aged 55 to 69 years, the decision to undergo periodic prostate-specific antigen (PSA)-based screening for prostate cancer should be an individual one. Before deciding whether to be screened, men should have an opportunity to discuss the potential benefits and harms of screening with their clinician and to incorporate their values and preferences in the decision. Screening offers a small potential benefit of reducing the chance of death from prostate cancer in some men. However, many men will experience potential harms of screening, including false-positive results that require additional testing and possible prostate biopsy; overdiagnosis and overtreatment; and treatment complications, such as incontinence and erectile dysfunction. In determining whether this service is appropriate in individual cases, patients and clinicians should consider the balance of benefits and harms on the basis of family history, race/ethnicity, comorbid medical conditions, patient values about the benefits and harms of screening and treatment-specific outcomes, and other health needs. Clinicians should not screen men who do not express a preference for screening.`,
        date: '08/05/2018'
      }
    } else {
      return false
    }
  },
  cervicalCancer () {
    if (!this.patientsInformationData) return false
    //  No screening recommendations for males
    if (this.patientsInformationData.gender === 'Male') return false
    if (this.patientsInformationData.age >= 21 && this.patientsInformationData.age <= 65) {
      return {
        disease: 'Cervical cancer',
        organization: 'U.S. Preventive Services Task Force',
        link: 'https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/cervical-cancer-screening',
        grade: 'A',
        recommendation: `The USPSTF recommends screening for cervical cancer every 3 years with cervical cytology alone in women aged 21 to 29 years. For women aged 30 to 65 years, the USPSTF recommends screening every 3 years with cervical cytology alone, every 5 years with high-risk human papillomavirus (hrHPV) testing alone, or every 5 years with hrHPV testing in combination with cytology (cotesting).

Refer to the link for the relative benefits and harms of alternative screening strategies for women 21 years or older.`,
        date: '21/08/2018'
      }
    } else {
      return false
    }
  },
  lungCancer () {
    if (!this.patientsInformationData) return false
    //  No screening recommendations for non-smokers
    if (this.patientsInformationData.smoker === 'No') return false
    //  No screening recommendations for smokers who smoked less than 20 pack year
    if (this.patientsInformationData.packYears < 20) return false
    if (this.patientsInformationData.age >= 50 && this.patientsInformationData.age <= 80 && this.patientsInformationData.packYears >= 20) {
      return {
        disease: 'Lung cancer',
        organization: 'U.S. Preventive Services Task Force',
        link: 'https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/lung-cancer-screening',
        grade: 'B',
        recommendation: `The USPSTF recommends annual screening for lung cancer with low-dose computed tomography (LDCT) in adults aged 50 to 80 years who have a 20 pack-year smoking history and currently smoke or have quit within the past 15 years. Screening should be discontinued once a person has not smoked for 15 years or develops a health problem that substantially limits life expectancy or the ability or willingness to have curative lung surgery.`,
        date: '09/03/2021'
      }
    } else {
      return false
    }
  },
  osteoporosisToPreventFractures () {
    if (!this.patientsInformationData) return false
    //  No screening recommendations for males
    if (this.patientsInformationData.gender === 'Male') return false
    if (this.patientsInformationData.age >= 65) {
      return {
        disease: 'Osteoporosis to Prevent Fractures',
        organization: 'U.S. Preventive Services Task Force',
        link: 'https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/osteoporosis-screening',
        grade: 'B',
        recommendation: `The USPSTF recommends screening for osteoporosis with bone measurement testing to prevent osteoporotic fractures in women 65 years and older.`,
        date: '26/06/2018'
      }
    } else if (this.patientsInformationData.age < 65 && this.patientsInformationData.postmenopausal === 'Yes') {
      return {
        disease: 'Osteoporosis to Prevent Fractures',
        organization: 'U.S. Preventive Services Task Force',
        link: 'https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/osteoporosis-screening',
        grade: 'B',
        recommendation: `The USPSTF recommends screening for osteoporosis with bone measurement testing to prevent osteoporotic fractures in postmenopausal women younger than 65 years who are at increased risk of osteoporosis, as determined by a formal clinical risk assessment tool.
Refer to the link for more information on risk assessment`,
        date: '26/06/2018'
      }
    } else {
      return false
    }
  },
  depressionInAdults () {
    if (!this.patientsInformationData) return false
    if (this.patientsInformationData.age >= 18) {
      return {
        disease: 'Depression in Adults',
        organization: 'U.S. Preventive Services Task Force',
        link: 'https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/depression-in-adults-screening',
        grade: 'B',
        recommendation: `The USPSTF recommends screening for depression in the general adult population, including pregnant and postpartum women. Screening should be implemented with adequate systems in place to ensure accurate diagnosis, effective treatment, and appropriate follow-up.`,
        date: '26/01/2016'
      }
    } else {
      return false
    }
  },
  AbnormalBloodGlucoseAndType2DiabetesMellitus () {
    if (!this.patientsInformationData) return false
    if (this.patientsInformationData.age >= 40 && this.patientsInformationData.age <= 70 && this.patientsInformationData.BMI >= 25) {
      return {
        disease: 'Abnormal Blood Glucose and Type 2 Diabetes Mellitus',
        organization: 'U.S. Preventive Services Task Force',
        link: 'https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/screening-for-abnormal-blood-glucose-and-type-2-diabetes',
        grade: 'B',
        recommendation: `The USPSTF recommends screening for abnormal blood glucose as part of cardiovascular risk assessment in adults aged 40 to 70 years who are overweight or obese. Clinicians should offer or refer patients with abnormal blood glucose to intensive behavioral counseling interventions to promote a healthful diet and physical activity.`,
        date: '26/10/2015'
      }
    } else {
      return false
    }
  },
  highBloodPressureinAdults () {
    if (!this.patientsInformationData) return false
    if (this.patientsInformationData.age >= 18) {
      return {
        disease: 'High Blood Pressure in Adults',
        organization: 'U.S. Preventive Services Task Force',
        link: 'https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/high-blood-pressure-in-adults-screening',
        grade: 'A',
        recommendation: `The USPSTF recommends screening for high blood pressure in adults aged 18 years or older. The USPSTF recommends obtaining measurements outside of the clinical setting for diagnostic confirmation before starting treatment.
Refer to the link for more information`,
        date: '12/10/2015'
      }
    } else {
      return false
    }
  },
  unhealthyDrugUse () {
    if (!this.patientsInformationData) return false
    if (this.patientsInformationData.age >= 18) {
      return {
        disease: 'Unhealthy Drug Use',
        organization: 'U.S. Preventive Services Task Force',
        link: 'https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/drug-use-illicit-screening',
        grade: 'B',
        recommendation: `The USPSTF recommends screening by asking questions about unhealthy drug use in adults age 18 years or older. Screening should be implemented when services for accurate diagnosis, effective treatment, and appropriate care can be offered or referred. 
(Screening refers to asking questions about unhealthy drug use, not testing biological specimens.)`,
        date: '09/06/2020'
      }
    } else {
      return false
    }
  },
  hepatitisBInfection () {
    if (!this.patientsInformationData) return false
    if (this.patientsInformationData.age >= 10) {
      return {
        disease: 'Hepatitis B Virus Infection in Adolescents and Adults',
        organization: 'U.S. Preventive Services Task Force',
        link: 'https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/hepatitis-b-virus-infection-screening',
        grade: 'B',
        recommendation: `The USPSTF recommends screening for hepatitis B virus (HBV) infection in adolescents and adults at increased risk for infection.

Refer to the link for a description of adolescents and adults at increased risk for infection.`,
        date: '15/12/2020'
      }
    } else {
      return false
    }
  },
  hepatitisCInfection () {
    if (!this.patientsInformationData) return false
    if (this.patientsInformationData.age >= 18 && this.patientsInformationData.age <= 79) {
      return {
        disease: 'Hepatitis C Virus Infection in Adolescents and Adults',
        organization: 'U.S. Preventive Services Task Force',
        link: 'https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/hepatitis-c-screening',
        grade: 'B',
        recommendation: `The USPSTF recommends screening for hepatitis C virus (HCV) infection in adults aged 18 to 79 years.`,
        date: '02/03/2020'
      }
    } else {
      return false
    }
  },
  abdominalAorticAneurysm () {
    if (!this.patientsInformationData) return false
    //  No screening recommendations for females
    if (this.patientsInformationData.gender === 'Female') return false
    if (this.patientsInformationData.age >= 65 && this.patientsInformationData.age <= 75 && (this.patientsInformationData.smoker === 'Yes' || this.patientsInformationData.smoker === 'Ex-smoker')) {
      return {
        disease: 'Abdominal Aortic Aneurysm',
        organization: 'U.S. Preventive Services Task Force',
        link: 'https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/abdominal-aortic-aneurysm-screening',
        grade: 'B',
        recommendation: `The USPSTF recommends 1-time screening for abdominal aortic aneurysm (AAA) with ultrasonography in men aged 65 to 75 years who have ever smoked.`,
        date: '10/12/2019'
      }
    } else if (this.patientsInformationData.age >= 65 && this.patientsInformationData.age <= 75 && this.patientsInformationData.smoker === 'No') {
      return {
        disease: 'Abdominal Aortic Aneurysm',
        organization: 'U.S. Preventive Services Task Force',
        link: 'https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/abdominal-aortic-aneurysm-screening',
        grade: 'C',
        recommendation: `The USPSTF recommends that clinicians selectively offer screening for AAA with ultrasonography in men aged 65 to 75 years who have never smoked rather than routinely screening all men in this group. Evidence indicates that the net benefit of screening all men in this group is small. In determining whether this service is appropriate in individual cases, patients and clinicians should consider the balance of benefits and harms on the basis of evidence relevant to the patient's medical history, family history, other risk factors, and personal values.`,
        date: '10/12/2019'
      }
    } else {
      return false
    }
  },
  asymptomaticBacteriuriaInAdults () {
    if (!this.patientsInformationData) return false
    //  No screening recommendations for males
    if (this.patientsInformationData.gender === 'Male') return false
    if (this.patientsInformationData.age >= 18 && this.patientsInformationData.pregnant === 'Yes') {
      return {
        disease: 'Asymptomatic Bacteriuria in Adults',
        organization: 'U.S. Preventive Services Task Force',
        link: 'https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/asymptomatic-bacteriuria-in-adults-screening',
        grade: 'B',
        recommendation: `The USPSTF recommends screening for asymptomatic bacteriuria using urine culture in pregnant persons.`,
        date: '24/09/2019'
      }
    } else {
      return false
    }
  },
  humanImmunodeficiencyVirusInfection () {
    if (!this.patientsInformationData) return false
    if (this.patientsInformationData.pregnant === 'Yes') {
      return {
        disease: 'Human Immunodeficiency Virus (HIV) Infection',
        organization: 'U.S. Preventive Services Task Force',
        link: 'https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/human-immunodeficiency-virus-hiv-infection-screening',
        grade: 'A',
        recommendation: `The USPSTF recommends that clinicians screen for HIV infection in all pregnant persons, including those who present in labor or at delivery whose HIV status is unknown.`,
        date: '11/06/2019'
      }
    } else if (this.patientsInformationData.age >= 15 && this.patientsInformationData.age <= 65) {
      return {
        disease: 'Human Immunodeficiency Virus (HIV) Infection',
        organization: 'U.S. Preventive Services Task Force',
        link: 'https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/human-immunodeficiency-virus-hiv-infection-screening',
        grade: 'A',
        recommendation: `The USPSTF recommends that clinicians screen for HIV infection in adolescents and adults aged 15 to 65 years. Younger adolescents and older adults who are at increased risk of infection should also be screened.
Refer to the link for more information about assessment of risk, screening intervals, and rescreening in pregnancy.`,
        date: '11/06/2019'
      }
    } else {
      return false
    }
  },
  unhealthyAlcoholUseinAdolescentsandAdults () {
    if (!this.patientsInformationData) return false
    if (this.patientsInformationData.age >= 18) {
      return {
        disease: 'Unhealthy Alcohol Use in Adolescents and Adults',
        organization: 'U.S. Preventive Services Task Force',
        link: 'https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/unhealthy-alcohol-use-in-adolescents-and-adults-screening-and-behavioral-counseling-interventions',
        grade: 'B',
        recommendation: `The USPSTF recommends screening for unhealthy alcohol use in primary care settings in adults 18 years or older, including pregnant women, and providing persons engaged in risky or hazardous drinking with brief behavioral counseling interventions to reduce unhealthy alcohol use.`,
        date: '13/11/2018'
      }
    } else {
      return false
    }
  },
  intimatePartnerViolenceElderAbuseAndAbuseOfVulnerableAdults () {
    if (!this.patientsInformationData) return false
    //  No screening recommendations for males
    if (this.patientsInformationData.gender === 'Male') return false
    if (this.patientsInformationData.gender === 'Female' && this.patientsInformationData.postmenopausal === 'No') {
      return {
        disease: 'Intimate Partner Violence, Elder Abuse, and Abuse of Vulnerable Adults',
        organization: 'U.S. Preventive Services Task Force',
        link: 'https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/intimate-partner-violence-and-abuse-of-elderly-and-vulnerable-adults-screening',
        grade: 'B',
        recommendation: `The USPSTF recommends that clinicians screen for intimate partner violence (IPV) in women of reproductive age and provide or refer women who screen positive to ongoing support services.

        Refer to the link for more information on effective ongoing support services for IPV and for information on IPV in men.`,
        date: '23/10/2018'
      }
    } else {
      return false
    }
  },
  syphilisInfectionInPregnantWomen () {
    if (!this.patientsInformationData) return false
    //  No screening recommendations for males
    if (this.patientsInformationData.gender === 'Male') return false
    if (this.patientsInformationData.pregnant === 'Yes') {
      return {
        disease: 'Syphilis Infection in Pregnant Women',
        organization: 'U.S. Preventive Services Task Force',
        link: 'https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/syphilis-infection-in-pregnancy-screening',
        grade: 'A',
        recommendation: `The USPSTF recommends early screening for syphilis infection in all pregnant women.`,
        date: '04/09/2018'
      }
    } else {
      return false
    }
  },
  visioninChildrenAges6Monthsto5Years () {
    if (!this.patientsInformationData) return false
    if (this.patientsInformationData.age >= 3 && this.patientsInformationData.age <= 5) {
      return {
        disease: 'Vision in Children Ages 6 Months to 5 Years',
        organization: 'U.S. Preventive Services Task Force',
        link: 'https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/vision-in-children-ages-6-months-to-5-years-screening',
        grade: 'B',
        recommendation: `The USPSTF recommends vision screening at least once in all children aged 3 to 5 years to detect amblyopia or its risk factors.`,
        date: '05/09/2017'
      }
    } else {
      return false
    }
  },
  obesityInChildrenAndAdolescents () {
    if (!this.patientsInformationData) return false
    if (this.patientsInformationData.age >= 6 && this.patientsInformationData.age <= 18) {
      return {
        disease: 'Obesity in Children and Adolescents',
        organization: 'U.S. Preventive Services Task Force',
        link: 'https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/obesity-in-children-and-adolescents-screening',
        grade: 'B',
        recommendation: `The USPSTF recommends that clinicians screen for obesity in children and adolescents 6 years and older and offer or refer them to comprehensive, intensive behavioral interventions to promote improvements in weight status.`,
        date: '20/06/2017'
      }
    } else {
      return false
    }
  },
  preeclampsia () {
    if (!this.patientsInformationData) return false
    //  No screening recommendations for males
    if (this.patientsInformationData.gender === 'Male') return false
    if (this.patientsInformationData.pregnant === 'Yes') {
      return {
        disease: 'Preeclampsia',
        organization: 'U.S. Preventive Services Task Force',
        link: 'https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/preeclampsia-screening',
        grade: 'B',
        recommendation: `The USPSTF recommends screening for preeclampsia in pregnant women with blood pressure measurements throughout pregnancy.`,
        date: '25/04/2017'
      }
    } else {
      return false
    }
  },
  latentTuberculosisInfection () {
    if (!this.patientsInformationData) return false
    if (this.patientsInformationData.age >= 18) {
      return {
        disease: 'Latent Tuberculosis Infection',
        organization: 'U.S. Preventive Services Task Force',
        link: 'https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/latent-tuberculosis-infection-screening',
        grade: 'B',
        recommendation: `The USPSTF recommends screening for latent tuberculosis infection (LTBI) in populations at increased risk.`,
        date: '06/09/2016'
      }
    } else {
      return false
    }
  },
  syphilisInfectionInNonpregnantAdultsAndAdolescents () {
    if (!this.patientsInformationData) return false
    // No screening for pregnant patients
    if (this.patientsInformationData.pregnant === 'Yes') return false
    if (this.patientsInformationData.age >= 10) {
      return {
        disease: 'Syphilis Infection in Nonpregnant Adults and Adolescents',
        organization: 'U.S. Preventive Services Task Force',
        link: 'https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/syphilis-infection-in-nonpregnant-adults-and-adolescents',
        grade: 'A',
        recommendation: `The USPSTF recommends screening for syphilis infection in persons who are at increased risk for infection.`,
        date: '07/06/2016'
      }
    } else {
      return false
    }
  },
  depressionInChildrenAndAdolescents () {
    if (!this.patientsInformationData) return false
    if (this.patientsInformationData.age >= 12 && this.patientsInformationData.age <= 18) {
      return {
        disease: 'Depression in Children and Adolescents',
        organization: 'U.S. Preventive Services Task Force',
        link: 'https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/depression-in-children-and-adolescents-screening',
        grade: 'B',
        recommendation: `The USPSTF recommends screening for major depressive disorder (MDD) in adolescents aged 12 to 18 years. Screening should be implemented with adequate systems in place to ensure accurate diagnosis, effective treatment, and appropriate follow-up.`,
        date: '08/02/2016'
      }
    } else {
      return false
    }
  },
  chlamydiaAndGonorrhea () {
    if (!this.patientsInformationData) return false
    //  No screening recommendations for males
    if (this.patientsInformationData.gender === 'Male') return false
    if (this.patientsInformationData.age >= 18 && this.patientsInformationData.gender === 'Female') {
      return {
        disease: 'Chlamydia and Gonorrhea',
        organization: 'U.S. Preventive Services Task Force',
        link: 'https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/chlamydia-and-gonorrhea-screening',
        grade: 'B',
        recommendation: `The USPSTF recommends screening for chlamydia and gonorrhea in sexually active women age 24 years and younger and in older women who are at increased risk for infection.`,
        date: '22/09/2014'
      }
    } else {
      return false
    }
  },
  dentalCariesInChildrenFromBirthThroughAge5Years () {
    if (!this.patientsInformationData) return false
    if (this.patientsInformationData.age >= 0.5 && this.patientsInformationData.age <= 5) {
      return {
        disease: 'Dental Caries in Children from Birth Through Age 5 Years',
        organization: 'U.S. Preventive Services Task Force',
        link: 'https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/dental-caries-in-children-from-birth-through-age-5-years-screening',
        grade: 'B',
        recommendation: `The USPSTF recommends that primary care clinicians prescribe oral fluoride supplementation starting at age 6 months for children whose water supply is  deficient in fluoride, and it recommends that primary care clinicians apply fluoride varnish to the primary teeth of all infants and children starting at the age of primary tooth  eruption.`,
        date: '05/05/2014'
      }
    } else {
      return false
    }
  },
  gestationalDiabetesMellitus () {
    if (!this.patientsInformationData) return false
    //  No screening recommendations for males
    if (this.patientsInformationData.gender === 'Male') return false
    if (this.patientsInformationData.pregnant === 'Yes') {
      return {
        disease: 'Gestational Diabetes Mellitus',
        organization: 'U.S. Preventive Services Task Force',
        link: 'https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/gestational-diabetes-mellitus-screening',
        grade: 'B',
        recommendation: `The USPSTF recommends screening for gestational diabetes mellitus (GDM) in asymptomatic pregnant women after 24 weeks of gestation.`,
        date: '14/01/2014'
      }
    } else {
      return false
    }
  },
  rhDIncompatibility () {
    if (!this.patientsInformationData) return false
    //  No screening recommendations for males
    if (this.patientsInformationData.gender === 'Male') return false
    if (this.patientsInformationData.pregnant === 'Yes') {
      return {
        disease: 'Rh(D) Incompatibility',
        organization: 'U.S. Preventive Services Task Force',
        link: 'https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/rh-d-incompatibility-screening',
        grade: 'A',
        recommendation: `The USPSTF strongly recommends Rh(D) blood typing and antibody testing for all pregnant women during their first visit for pregnancy-related care.`,
        date: '15/02/2004'
      }
    } else {
      return false
    }
  },
  rhDIncompatibilityUnsensitized () {
    if (!this.patientsInformationData) return false
    //  No screening recommendations for males
    if (this.patientsInformationData.gender === 'Male') return false
    if (this.patientsInformationData.pregnant === 'Yes') {
      return {
        disease: 'Rh(D) Incompatibility',
        organization: 'U.S. Preventive Services Task Force',
        link: 'https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/rh-d-incompatibility-screening',
        grade: 'B',
        recommendation: `The USPSTF recommends repeated Rh(D) antibody testing for all unsensitized Rh(D)-negative women at 24 to 28 weeks' gestation, unless the biological father is known to be Rh(D)-negative.`,
        date: '15/02/2004'
      }
    } else {
      return false
    }
  }
}
