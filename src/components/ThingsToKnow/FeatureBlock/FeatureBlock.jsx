import React from "react";

import SecurePayment from "../../../assets/secure-payments.png";
import TopRatedInsurance from "../../../assets/top-rated-insurance.png";
import VerifiedBadges from "../../../assets/verified-badges.png";
import HereIfYouNeedUs from "../../../assets/here-if-you-need-us.png";

import styles from "./FeatureBlock.module.scss";

export const FeatureBlock = (props) => (
  <div>
    <div className={styles.FeatureContainer}>
      <div className={styles.FeatureImg}>
        <img src={SecurePayment} alt="test"></img>
      </div>
      <div className={styles.FeatureContent}>
        <div className={styles.subhead}>Secure Payments</div>
        <div className={styles.describe}>
          We hold task payments secure with our PCI-DSS compliant Airtasker Pay
          – so tasks can be completed knowing payment is there when you're done.
        </div>
        <a
          href="https://support.airtasker.com/hc/en-au/categories/200049939-Payments"
          className={styles.readMore}
        >
          Read more
        </a>
      </div>
    </div>

    <div className={styles.FeatureContainer}>
      <div className={styles.FeatureContent}>
        <div className={styles.subhead}>Top rated insurance</div>
        <div className={styles.describe}>
          Insurance is there to ease any worries - making sure the Tasker has
          liability insurance from CGU while performing most task activities.
          T&C's apply.
        </div>
        <a
          href="https://www.airtasker.com/insurance/"
          className={styles.readMore}
        >
          Read more
        </a>
      </div>
      <div className={styles.FeatureImg}>
        <img src={TopRatedInsurance} alt="test"></img>
      </div>
    </div>

    <div className={styles.FeatureContainer}>
      <div className={styles.FeatureImg}>
        <img src={VerifiedBadges} alt="test"></img>
      </div>
      <div className={styles.FeatureContent}>
        <div className={styles.subhead}>Verified badges</div>
        <div className={styles.describe}>
          Badges give members a bit more verified info when deciding who to work
          with on a task. Each badge has certain requirements that must be met
          and verified before they’re shown on the member's profile.
        </div>
        <a
          href="https://www.airtasker.com/blog/airtasker-badges/"
          className={styles.readMore}
        >
          Read more
        </a>
      </div>
    </div>

    <div className={styles.FeatureContainer}>
      <div className={styles.FeatureContent}>
        <div className={styles.subhead}>Here if you need us</div>
        <div className={styles.describe}>
          Our comprehensive Help Centre and dedicated Airtasker Support are on
          hand 24/7 to help with any questions, queries or issues you might
          have.
        </div>
        <a
          href="https://support.airtasker.com/hc/en-au"
          className={styles.readMore}
        >
          Read more
        </a>
      </div>
      <div className={styles.FeatureImg}>
        <img src={HereIfYouNeedUs} alt="test"></img>
      </div>
    </div>
  </div>
);
