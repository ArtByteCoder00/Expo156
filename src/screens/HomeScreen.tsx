import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import HeaderCustom from '../components/HeaderCustom';
import FooterCustom from '../components/FooterCustom';
import { theme } from '../theme';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <HeaderCustom title="URBS" />
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.card}>
          <MaterialCommunityIcons 
            name="home" 
            size={32} 
            color={theme.colors.primary} 
            style={styles.icon}
          />
          <Text style={styles.cardTitle}>Bem-vindo!</Text>
          <Text style={styles.cardText}>Use o menu abaixo para acessar as funções.</Text>
        </View>
        
        <View style={styles.card}>
          <MaterialCommunityIcons 
            name="bus" 
            size={32} 
            color={theme.colors.primary} 
            style={styles.icon}
          />
          <Text style={styles.cardTitle}>Linhas Disponíveis</Text>
          <Text style={styles.cardText}>Vila Sandra, Santa Cândida, Pinheirinho</Text>
        </View>
        
        <View style={styles.card}>
          <MaterialCommunityIcons 
            name="bus-alert" 
            size={32} 
            color={theme.colors.warning} 
            style={styles.icon}
          />
          <Text style={styles.cardTitle}>Linhas Indisponíveis</Text>
          <Text style={styles.cardText}>Novas linhas serão adicionadas em breve.</Text>
        </View>
        
        <View style={styles.card}>
          <MaterialCommunityIcons 
            name="history" 
            size={32} 
            color={theme.colors.primary} 
            style={styles.icon}
          />
          <Text style={styles.cardTitle}>Histórico de Pagamentos</Text>
          <Text style={styles.cardText}>Veja seu histórico de pagamentos na seção de histórico.</Text> 
        </View>
      </ScrollView>
      <FooterCustom />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: theme.colors.background 
  },
  content: {
    padding: theme.spacing.lg,
  },
  card: {
    backgroundColor: theme.colors.card,
    padding: theme.spacing.lg,
    marginBottom: theme.spacing.md,
    borderRadius: theme.radius.lg,
    ...theme.shadows.sm,
    alignItems: 'center',
  },
  cardTitle: {
    ...theme.typography.h3,
    color: theme.colors.primary,
    marginVertical: theme.spacing.sm,
    textAlign: 'center',
  },
  cardText: {
    ...theme.typography.body,
    color: theme.colors.text,
    textAlign: 'center',
  },
  icon: {
    marginBottom: theme.spacing.xs,
  },
});