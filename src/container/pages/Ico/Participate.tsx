import Index from "../../Index";

export default function Participate() {
  return (
    <>
      <Index.Box className="participate-section" id="participate">
        <Index.Box className="participate-content-box">
          <Index.Typography className="participate-title">
            How to participate{" "}
            <span className="participate-span">(instruction)</span>
          </Index.Typography>
          <Index.Typography className="participate-para">
            How to participate (instruction):
          </Index.Typography>
          <Index.Box className="participate-list-main">
            <ul className="participate-list">
              <li className="participate-list-item">Connect your wallet</li>
              <li className="participate-list-item">
                Push the button “purchase BZZN”
              </li>
              <li className="participate-list-item">
                Agree with Terms of Participation
              </li>
              <li className="participate-list-item">
                In pop-up window type the amount you want to purchase
              </li>
              <li className="participate-list-item">
                Confirm (sign) the transaction in your wallet window
              </li>
              <li className="participate-list-item">
                Now you have been added to the whitelist of participants. Look
                throughthe “claim instruction” document
              </li>
            </ul>
          </Index.Box>
        </Index.Box>
      </Index.Box>
    </>
  );
}
