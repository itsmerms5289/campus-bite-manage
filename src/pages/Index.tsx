import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Utensils, ChefHat, ClipboardList, ArrowRight } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-background">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-8 mb-16">
          <div className="flex justify-center mb-6">
            <div className="h-24 w-24 rounded-full bg-gradient-to-br from-primary to-warning flex items-center justify-center shadow-lg">
              <Utensils className="h-12 w-12 text-primary-foreground" />
            </div>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-warning bg-clip-text text-transparent">
            Student Hotel Food System
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Streamline your food ordering experience with our comprehensive management system for students, kitchen
            staff, and managers.
          </p>
          <Button size="lg" onClick={() => navigate("/auth")} className="mt-8">
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-card rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow border border-border">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Utensils className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">For Students</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Browse menu with filters</li>
              <li>• Order dine-in or takeaway</li>
              <li>• Multiple payment options</li>
              <li>• Track order status</li>
              <li>• View order history</li>
            </ul>
          </div>

          <div className="bg-card rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow border border-border">
            <div className="h-12 w-12 rounded-full bg-warning/10 flex items-center justify-center mb-4">
              <ChefHat className="h-6 w-6 text-warning" />
            </div>
            <h3 className="text-xl font-bold mb-3">For Kitchen Staff</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Real-time order notifications</li>
              <li>• Accept or deny orders</li>
              <li>• Update order status</li>
              <li>• Manage preparation times</li>
              <li>• View active orders</li>
            </ul>
          </div>

          <div className="bg-card rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow border border-border">
            <div className="h-12 w-12 rounded-full bg-success/10 flex items-center justify-center mb-4">
              <ClipboardList className="h-6 w-6 text-success" />
            </div>
            <h3 className="text-xl font-bold mb-3">For Managers</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Manage menu items</li>
              <li>• View sales reports</li>
              <li>• Track revenue</li>
              <li>• Monitor operations</li>
              <li>• Control availability</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">Already have an account?</p>
          <Button variant="outline" size="lg" onClick={() => navigate("/auth")}>
            Sign In
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
