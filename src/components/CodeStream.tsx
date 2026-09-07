"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const CODE_SNIPPETS = [
  "import pandas as pd",
  "import numpy as np",
  "from sklearn.ensemble import RandomForestClassifier",
  "df = pd.read_csv('sensor_data.csv')",
  "df.fillna(method='ffill', inplace=True)",
  "X = df.drop('failure', axis=1)",
  "y = df['failure']",
  "model = XGBoostClassifier(n_estimators=100)",
  "model.fit(X_train, y_train)",
  "predictions = model.predict(X_test)",
  "from sklearn.metrics import accuracy_score",
  "accuracy = accuracy_score(y_test, predictions)",
  "import shap",
  "explainer = shap.TreeExplainer(model)",
  "shap_values = explainer.shap_values(X)",
  "SELECT * FROM user_transactions WHERE fraud_flag = 1",
  "CREATE VIEW kpi_dashboard AS",
  "SELECT date, COUNT(id) as total_events FROM logs GROUP BY date",
  "import streamlit as st",
  "st.title('Predictive Maintenance Dashboard')",
];

export default function CodeStream() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-[0.03]">
      <div className="flex w-full h-full justify-between px-10">
        {[1, 2, 3].map((col) => (
          <motion.div
            key={col}
            initial={{ y: col % 2 === 0 ? "-100%" : "0%" }}
            animate={{ y: col % 2 === 0 ? "0%" : "-100%" }}
            transition={{
              duration: 40 + col * 10,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex flex-col gap-4 font-mono text-xs whitespace-pre text-white"
          >
            {/* Duplicate array for seamless scrolling */}
            {[...CODE_SNIPPETS, ...CODE_SNIPPETS, ...CODE_SNIPPETS].map((code, i) => (
              <div key={i}>{code}</div>
            ))}
          </motion.div>
        ))}
      </div>
      
      {/* Heavy gradient to fade out the top and bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none"></div>
    </div>
  );
}
