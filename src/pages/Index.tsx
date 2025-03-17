
import ThoughtsManager from "@/components/ThoughtsManager";
import AuthComponent from "@/components/AuthComponent";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <header className="pt-8 pb-6 px-4 text-center">
        <h1 className="text-3xl font-medium tracking-tight mb-2">Thought Space</h1>
        <p className="text-muted-foreground max-w-md mx-auto">
          Capture your ideas, organize with folders, and track your progress
        </p>
      </header>
      
      <main className="max-w-4xl mx-auto px-4">
        <AuthComponent />
        <ThoughtsManager />
      </main>
    </div>
  );
};

export default Index;
