import "./App.css";
import Tabs from "./components/Tabs";

export default function App() {
  return (
    <>
      <Tabs defaultValue="profil">
        <Tabs.List>
          <Tabs.Trigger value="profil">Profil</Tabs.Trigger>
          <Tabs.Trigger value="settings">Nastavenie</Tabs.Trigger>
          <Tabs.Trigger value="notification">Oznamenie</Tabs.Trigger>
        </Tabs.List>

        <hr />

        <Tabs.Content value="profil">
          <h2>Profil</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, id?
          </p>
        </Tabs.Content>
        <Tabs.Content value="settings">
          <h2>Nastavenie</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, id?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            dolorem quas consequuntur quo corrupti magni, voluptatem deleniti
            dicta hic consectetur!
          </p>
        </Tabs.Content>
        <Tabs.Content value="notification">
          <h2>Oznamenie</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, id?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
            fugit accusamus cum tempora optio nisi.
          </p>
        </Tabs.Content>
      </Tabs>
    </>
  );
}
