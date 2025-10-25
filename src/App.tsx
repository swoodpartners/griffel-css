import { makeStyles } from "@griffel/react";
import { Button } from "./Button/Button";

const useClasses = makeStyles({
  container: {
    padding: "20px",
    fontFamily: "system-ui, sans-serif",
  },
  section: {
    marginBottom: "30px",
  },
  title: {
    fontSize: "18px",
    fontWeight: "600",
    marginBottom: "15px",
    color: "#374151",
  },
  buttonGroup: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
    alignItems: "center",
  },
});

function App() {
  const classes = useClasses();

  return (
    <div className={classes.container}>
      <h1
        style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "30px" }}
      >
        Button Variants with CVA + Griffel
      </h1>

      <div className={classes.section}>
        <h2 className={classes.title}>Button Variants</h2>
        <div className={classes.buttonGroup}>
          <Button>Accent by default</Button>
          <Button variant="link">Link</Button>
        </div>
      </div>

      <div className={classes.section}>
        <h2 className={classes.title}>Button Sizes</h2>
        <div className={classes.buttonGroup}>
          <Button size="sm">Small</Button>
          <Button size="lg">Large</Button>
        </div>
      </div>

      <div className={classes.section}>
        <h2 className={classes.title}>Disabled States</h2>
        <div className={classes.buttonGroup}>
          <Button disabled>Default Disabled</Button>
          <Button variant="link" disabled>
            Link Disabled
          </Button>
        </div>
      </div>

      <div className={classes.section}>
        <h2 className={classes.title}>Combined Variants</h2>
        <div className={classes.buttonGroup}>
          <Button variant="accent" size="sm">
            Small Accent
          </Button>
          <Button variant="link" size="lg">
            Link compoundVariants
          </Button>
          <Button variant="accent" size="lg">
            Large Accent
          </Button>
          <Button variant="link" size="sm">
            Small Link
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
