"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Timeline({ items }) {
  return (
    <div className="space-y-8">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative pl-8 border-l"
        >
          {/* Timeline dot */}
          <div className="absolute left-[-5px] top-2 h-2.5 w-2.5 rounded-full bg-primary" />
          
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <span className="text-sm text-muted-foreground">{item.duration}</span>
            </div>
            
            <p className="text-muted-foreground">{item.organization}</p>
            
            {Array.isArray(item.details) ? (
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                {item.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-muted-foreground">{item.details}</p>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
} 