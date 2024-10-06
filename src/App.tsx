import { useState } from 'react';
import { useTheme } from 'next-themes';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Calendar, Globe, MoreHorizontal } from "lucide-react";
import { LinkedInLogoIcon } from '@radix-ui/react-icons';

function App() {
  const [selectedTab, setSelectedTab] = useState('account-overview');
  const { theme } = useTheme();

  return (
    <div className="min-h-screen bg-white text-foreground">
      <header className="flex justify-between items-center p-4 border-b bg-white">
        <div className="flex items-center">
          <img src="https://xgjzloifyvgpbmyonaya.supabase.co/storage/v1/object/public/files/LBMBVb-Gx9/original" alt="Sparrow Logo" className="h-8" />
        </div>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </header>

      <div className="bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center space-x-2 mb-6">
            <ArrowLeft className="h-5 w-5" />
            <span className="text-sm text-muted-foreground">Back to Accounts</span>
          </div>

          <div className="mb-3"> {/* Changed from mb-6 to mb-3 */}
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center space-x-4">
                <div className="bg-orange-500 w-16 h-16 rounded-md flex items-center justify-center">
                  <span className="text-white font-bold text-3xl">SI</span>
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <h1 className="text-2xl font-bold">Squirrel Inc</h1>
                    <Button variant="outline" className="w-10 h-7 p-0 shadow-sm hover:bg-stone-50">
                      <Globe className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" className="w-10 h-7 p-0 shadow-sm hover:bg-stone-50">
                      <LinkedInLogoIcon className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">Detroit, Michigan • Manufacturing</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <p className="text-sm font-semibold">Next call: Product Demo</p>
                  <p className="text-sm text-muted-foreground">Tuesday, September 3 at 2pm</p>
                </div>
                <Button variant="outline" size="sm" className="bg-indigo-50 text-indigo-600 hover:bg-indigo-100 hover:text-indigo-600 border-none">
                  <Calendar className="h-4 w-4 mr-2" />
                  Open Calendar
                </Button>
                <Button variant="ghost" size="icon" className="bg-indigo-50 text-indigo-600 hover:bg-indigo-100 hover:text-indigo-600 w-9 h-9 p-0">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-3"> {/* Changed from space-y-4 to space-y-3 */}
              <TabsList className="bg-transparent border-none p-1 space-x-2">
                <TabsTrigger 
                  value="account-overview" 
                  className="rounded-full data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:hover:bg-white data-[state=active]:hover:border-transparent hover:bg-stone-100 hover:border-stone-200 border border-transparent"
                >
                  Account Overview
                </TabsTrigger>
                <TabsTrigger 
                  value="meeting-prep" 
                  className="rounded-full data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:hover:bg-white data-[state=active]:hover:border-transparent hover:bg-stone-100 hover:border-stone-200 border border-transparent"
                >
                  Meeting prep
                </TabsTrigger>
                <TabsTrigger 
                  value="call-transcripts" 
                  className="rounded-full data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:hover:bg-white data-[state=active]:hover:border-transparent hover:bg-stone-100 hover:border-stone-200 border border-transparent"
                >
                  Call Transcripts
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Account Overview</h2>
          <Button variant="outline" className="hover:bg-stone-50">Demo Stage</Button>
        </div>
        <div className="mt-4 space-y-4">
          {/* Add your account overview content here */}
        </div>
      </main>
    </div>
  );
}

export default App;