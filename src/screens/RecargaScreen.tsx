import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import HeaderCustom from '../components/HeaderCustom';
import FooterCustom from '../components/FooterCustom';
import { theme } from '../theme';

export default function RecargaScreen() {
  const [valor, setValor] = useState('');

  const handleRecarga = () => {
    if (!valor || Number(valor) <= 0) {
      Alert.alert('Erro', 'Digite um valor válido para recarga');
      return;
    }
    Alert.alert('Sucesso', `Recarga de R$${valor} realizada com sucesso!`);
    setValor('');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <HeaderCustom title="Recarga" />
      <View style={styles.content}>
        <Text style={styles.label}>Valor da recarga (R$):</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={valor}
          onChangeText={setValor}
          placeholder="Ex: 20"
        />
        <TouchableOpacity style={styles.button} onPress={handleRecarga}>
          <Text style={styles.buttonText}>Pagar</Text>
        </TouchableOpacity>
      </View>
      <FooterCustom />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: theme.colors.background 
  },
  content: {
    padding: theme.spacing.lg,
    flex: 1,
    justifyContent: 'center',
  },
  label: {
    fontSize: theme.typography.h3.fontSize,
    fontWeight: theme.typography.h3.fontWeight,
    color: theme.colors.text,
    marginBottom: theme.spacing.sm,
  },
  input: {
    borderWidth: 1,
    borderColor: theme.colors.border,
    padding: theme.spacing.md,
    borderRadius: theme.radius.md,
    marginBottom: theme.spacing.lg,
    backgroundColor: '#fff',
    fontSize: theme.typography.body.fontSize,
    color: theme.colors.text,
    ...theme.shadows.sm,
  },
  button: {
    backgroundColor: theme.colors.primary,
    padding: theme.spacing.md,
    borderRadius: theme.radius.lg,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    ...theme.shadows.md,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: theme.typography.body.fontSize,
    marginLeft: theme.spacing.sm,
  },
});