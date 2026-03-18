import "./App.css";
import Tabs, { TabsContent, TabsList, TabsTrigger } from "./components/Tabs";

export default function App() {
  return (
    <>
      <Tabs defaultValue="profil">
        <TabsList>
          <TabsTrigger value="profil">Profil</TabsTrigger>
          <TabsTrigger value="settings">Nastavenie</TabsTrigger>
          <TabsTrigger value="notification">Oznamenie</TabsTrigger>
        </TabsList>

        <hr />

        <TabsContent value="profil">
          <h2>Profil</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, id?
          </p>
        </TabsContent>
        <TabsContent value="settings">
          <h2>Nastavenie</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, id?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            dolorem quas consequuntur quo corrupti magni, voluptatem deleniti
            dicta hic consectetur!
          </p>
        </TabsContent>
        <TabsContent value="notification">
          <h2>Oznamenie</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, id?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
            fugit accusamus cum tempora optio nisi.
          </p>
        </TabsContent>
      </Tabs>
    </>
  );
}
