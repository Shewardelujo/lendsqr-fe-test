import UserDetailItem from "../UserDetailItem/UserDetailItem";
import "./UserDetailsSectionedInfo.scss";

const UserDetailsSectionedInfo = () => {
  const user = JSON.parse(localStorage.getItem("user") || "");

  return (
    <div className="user-details-card-section">
      <div>
        <div className="user-section-info">Personal Information</div>
        <div className="row">
          <UserDetailItem
            title="full name"
            info={`${user.profile?.firstName} ${user.profile?.lastName}`}
          />
          <UserDetailItem
            title="phone Number"
            info={`${user.profile?.phoneNumber}`}
          />
          <UserDetailItem
            title="email address"
            info={`${user.email}`}
            id="email-info"
          />
          <UserDetailItem title="bvn" info={`${user.profile.bvn}`} />
          <UserDetailItem title="gender" info={`${user.profile.gender}`} />
          <UserDetailItem
            title="marital Status"
            info={`${user.profile.maritalStatus}`}
          />
          <UserDetailItem title="children" info={`${user.profile.children}`} />
          <UserDetailItem
            title="type Of Residence"
            info={`${user.profile.typeOfResidence}`}
          />
        </div>
        <hr className="user-section-info-partition" />

        <div className="user-section-info">Education and Employment</div>
        <div className="row">
          <UserDetailItem
            title="level of education"
            info={`${user.education?.level}`}
          />
          <UserDetailItem
            title="employment status"
            info={`${user.education?.employmentStatus}`}
          />
          <UserDetailItem
            title="sector of employment"
            info={`${user.education.sector}`}
          />
          <UserDetailItem
            title="Duration of employment"
            info={`${user.education.duration}`}
          />
          <UserDetailItem
            title="office email"
            info={`${user.education.officeEmail}`}
            id="email-info"
          />
          <UserDetailItem
            title="Monthly income"
            info={`${user.education.monthlyIncome[0]} - ${user.education.monthlyIncome[1]}`}
          />
          <UserDetailItem
            title="loan repayment"
            info={`${user.education.loanRepayment}`}
          />
        </div>
        <hr className="user-section-info-partition" />

        <div className="user-section-info">Socials</div>
        <div className="row">
          <UserDetailItem title="twitter" info={`${user.socials.twitter}`} />
          <UserDetailItem title="facebook" info={`${user.socials.facebook}`} />
          <UserDetailItem
            title="Instagram"
            info={`${user.socials.instagram}`}
          />
        </div>
        <hr className="user-section-info-partition" />

        <div className="user-section-info">Guarantor</div>
        <div className="row">
          <UserDetailItem
            title="full name"
            info={`${user.guarantor?.firstName} ${user.guarantor?.lastName}`}
          />
          <UserDetailItem
            title="Phone Number"
            info={`${user.guarantor.phoneNumber}`}
          />
          <UserDetailItem
            title="Email Address"
            info={
              user.guarantor.emailAddress
                ? `${user.guarantor.emailAddress}`
                : "N/A"
            }
          />
          <UserDetailItem
            title="Relationship"
            info={
              user.guarantor.relationship
                ? `${user.guarantor.relationship}`
                : "N/A"
            }
          />
        </div>
        <hr className="user-section-info-partition" />
      </div>
    </div>
  );
};

export default UserDetailsSectionedInfo;
