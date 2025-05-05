
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface BeforeAfterProps {
  beforeImage: string;
  afterImage: string;
  title: string;
  description: string;
}

const BeforeAfterCard = ({ beforeImage, afterImage, title, description }: BeforeAfterProps) => {
  const [showAfter, setShowAfter] = useState(false);

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative h-80 overflow-hidden">
        <img 
          src={beforeImage} 
          alt="Before" 
          className={`w-full h-full object-cover transition-opacity duration-500 ${showAfter ? 'opacity-0' : 'opacity-100'}`}
          style={{ position: 'absolute', top: 0, left: 0 }}
        />
        <img 
          src={afterImage} 
          alt="After" 
          className={`w-full h-full object-cover transition-opacity duration-500 ${showAfter ? 'opacity-100' : 'opacity-0'}`}
          style={{ position: 'absolute', top: 0, left: 0 }}
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <div className="text-white">
            <p className="font-semibold text-sm">{showAfter ? 'After' : 'Before'}</p>
          </div>
        </div>
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button 
          className="w-full bg-rose-600 hover:bg-rose-700"
          onMouseEnter={() => setShowAfter(true)}
          onMouseLeave={() => setShowAfter(false)}
          onClick={() => setShowAfter(!showAfter)}
        >
          {showAfter ? 'View Before' : 'View After'}
        </Button>
      </CardFooter>
    </Card>
  );
};

const hairTransformations = [
  {
    beforeImage: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80",
    afterImage: "https://images.unsplash.com/photo-1605980776566-0486c3ac7cbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    title: "Dimensional Highlights",
    description: "From flat color to multi-dimensional highlights that add depth and movement."
  },
  {
    beforeImage: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=699&q=80",
    afterImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
    title: "Precision Haircut",
    description: "A transformative cut that enhances natural texture and face shape."
  },
  {
    beforeImage: "https://images.unsplash.com/photo-1541943181603-d8fe267a5dcf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=712&q=80",
    afterImage: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
    title: "Color Transformation",
    description: "From basic brown to a vibrant, head-turning color that reflects personality."
  }
];

const makeupTransformations = [
  {
    beforeImage: "https://images.unsplash.com/photo-1508186736123-44a5fcb36f9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    afterImage: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
    title: "Natural Everyday Look",
    description: "Enhancing natural features with a soft, everyday makeup application."
  },
  {
    beforeImage: "https://images.unsplash.com/photo-1542996966-2e31c00bae31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    afterImage: "https://images.unsplash.com/photo-1512903989922-697e3ca50043?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=692&q=80",
    title: "Evening Glam",
    description: "Dramatic evening makeup perfect for special occasions and nights out."
  },
  {
    beforeImage: "https://images.unsplash.com/photo-1557874689-001aa9b221c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
    afterImage: "https://images.unsplash.com/photo-1633085272509-57c95b8ce6a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    title: "Bridal Beauty",
    description: "Timeless bridal makeup that enhances and photographs beautifully."
  }
];

const skinTransformations = [
  {
    beforeImage: "https://images.unsplash.com/photo-1588622056995-93bbc3ba2914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    afterImage: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    title: "Acne Treatment",
    description: "Progressive improvement through our specialized acne treatment protocol."
  },
  {
    beforeImage: "https://images.unsplash.com/photo-1540298981459-a54c21bfaa63?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=701&q=80",
    afterImage: "https://images.unsplash.com/photo-1602442787305-decb50b8e0f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=692&q=80",
    title: "Anti-Aging Facial",
    description: "Visible reduction in fine lines and improved skin elasticity after treatment."
  },
  {
    beforeImage: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=726&q=80",
    afterImage: "https://images.unsplash.com/photo-1556304085-a774d19c68bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=691&q=80",
    title: "Hydrating Treatment",
    description: "Transformation from dry, dull skin to hydrated, glowing complexion."
  }
];

const TransitionsPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-rose-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Beauty Transformations</h1>
            <p className="text-lg text-gray-700">
              Witness the before and after results of our expert beauty services
            </p>
          </div>
        </div>
      </section>

      {/* Transformations Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="hair" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-gray-100">
                <TabsTrigger value="hair" className="text-base">Hair</TabsTrigger>
                <TabsTrigger value="makeup" className="text-base">Makeup</TabsTrigger>
                <TabsTrigger value="skin" className="text-base">Skin</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="hair">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {hairTransformations.map((item, index) => (
                  <BeforeAfterCard
                    key={index}
                    beforeImage={item.beforeImage}
                    afterImage={item.afterImage}
                    title={item.title}
                    description={item.description}
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="makeup">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {makeupTransformations.map((item, index) => (
                  <BeforeAfterCard
                    key={index}
                    beforeImage={item.beforeImage}
                    afterImage={item.afterImage}
                    title={item.title}
                    description={item.description}
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="skin">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skinTransformations.map((item, index) => (
                  <BeforeAfterCard
                    key={index}
                    beforeImage={item.beforeImage}
                    afterImage={item.afterImage}
                    title={item.title}
                    description={item.description}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Client Stories Section */}
      <section className="py-16 bg-rose-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Client Stories</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Hear from our clients about their transformative experiences
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="mb-6 md:mb-0 md:mr-8">
                <img 
                  src="https://randomuser.me/api/portraits/women/32.jpg" 
                  alt="Client" 
                  className="w-24 h-24 rounded-full object-cover"
                />
              </div>
              <div>
                <blockquote className="text-gray-700 italic mb-4">
                  "I was nervous about going for such a dramatic hair color change, but the team at Monalisa made me feel comfortable throughout the process. The transformation was even better than I imagined, and I've received so many compliments!"
                </blockquote>
                <div>
                  <h4 className="font-semibold text-gray-900">Rebecca Thomas</h4>
                  <p className="text-rose-600 text-sm">Hair Color Transformation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-rose-500 to-rose-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready for Your Transformation?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Book your appointment today and let our experts work their magic.
          </p>
          <Button 
            onClick={() => window.location.href = "/appointments"}
            className="bg-white text-rose-600 hover:bg-rose-100"
          >
            Book Your Transformation
          </Button>
        </div>
      </section>
    </div>
  );
};

export default TransitionsPage;
