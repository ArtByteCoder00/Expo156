import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import HeaderCustom from '../components/HeaderCustom';
import FooterCustom from '../components/FooterCustom';
import { theme } from '../theme';

type Pagamento = {
  id: string;
  data: string;
  valor: string;
};

const pagamentos: Pagamento[] = [
  { id: '1', data: '20/07/2025', valor: 'R$ 10,00' },
  { id: '2', data: '15/07/2025', valor: 'R$ 8,50' },
  { id: '3', data: '10/07/2025', valor: 'R$ 12,00' },
  { id: '4', data: '05/07/2025', valor: 'R$ 15,00' },
];

export default function HistoricoScreen() {
  return (
    <View style={styles.container}>
      <HeaderCustom title="Histórico de Pagamentos" />
      <FlatList
        data={pagamentos}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.data}>{item.data}</Text>
            <Text style={styles.valor}>{item.valor}</Text>
          </View>
        )}
      />
      <FooterCustom />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.background },
  listContent: {
    padding: theme.spacing.md,
    paddingBottom: 80,
  },
  card: {
    backgroundColor: theme.colors.card,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.sm,
    borderRadius: theme.radius.sm,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  data: {
    fontSize: 16,
  },
  valor: {
    fontWeight: 'bold',
    fontSize: 16,
    color: theme.colors.primary,
  },
});
