import usePledge from "../hooks/use-pledge";
import PledgeForm from "../components/PledgeForm.jsx";

function PledgePage() {
    return (
        <div className="Pledge">
            <h1>Want to support a campaign?</h1>
            <PledgeForm />
        </div>
    );
}

export default PledgePage;