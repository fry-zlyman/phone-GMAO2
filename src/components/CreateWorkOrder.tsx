
import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from "react-hook-form";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface CreateWorkOrderProps {
  isOpen: boolean;
  onClose: () => void;
}

interface WorkOrderForm {
  titre: string;
  description: string;
  date_planification: string;
}

const CreateWorkOrder = ({ isOpen, onClose }: CreateWorkOrderProps) => {
  const { toast } = useToast();
  const form = useForm<WorkOrderForm>();

  const onSubmit = async (data: WorkOrderForm) => {
    try {
      const response = await fetch('http://localhost:5000/workorders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast({
          title: "Ordre de travail créé",
          description: "L'ordre de travail a été créé avec succès",
        });
        onClose();
      } else {
        throw new Error('Erreur lors de la création');
      }
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Impossible de créer l'ordre de travail",
        variant: "destructive",
      });
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-[400px] sm:w-[540px]">
        <SheetHeader>
          <SheetTitle>Créer un ordre de travail</SheetTitle>
        </SheetHeader>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-6"
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="titre"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Titre</FormLabel>
                    <FormControl>
                      <Input placeholder="Titre de l'intervention" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Description détaillée de l'intervention"
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="date_planification"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Date planifiée</FormLabel>
                    <FormControl>
                      <Input type="datetime-local" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex justify-end space-x-4">
                <Button variant="outline" onClick={onClose}>
                  Annuler
                </Button>
                <Button type="submit">
                  Créer
                </Button>
              </div>
            </form>
          </Form>
        </motion.div>
      </SheetContent>
    </Sheet>
  );
};

export default CreateWorkOrder;
