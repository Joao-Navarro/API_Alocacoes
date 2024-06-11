// App.js
// Importa React e hooks useState e useEffect do React
import React, { useState, useEffect } from "react"; 

import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
  Alert,
} from "react-native"; // Importa componentes do React Native

const API_URL = "http://10.136.37.249:3000/api"; // Define a URL da API. Ajuste para o seu IP

export default function App() {
  const [name, setName] = useState(""); // Estado para armazenar o nome do produto
  const [quantity, setQuantity] = useState([]); // Estado para armazenar a quantidade do produto
  const [brand, setBrand] = useState(""); // Estado para armazenar a marca do produto
  const [products, setProducts] = useState([]); // Estado para armazenar a lista de produtos
  const [selectedProduct, setSelectedProduct] = useState(null); // Estado para armazenar o produto selecionado para edição

  useEffect(() => {
    fetchProducts(); // Busca os produtos ao carregar o componente
  }, []); // Array de dependências vazio para garantir que execute apenas uma vez

  const fetchProducts = async () => {
    try {
      const response = await fetch(`${API_URL}/products`); // Faz uma requisição GET para buscar os produtos
      if (!response.ok) {
        const errorResponse = await response.text(); // Lê a resposta de erro
        throw new Error(errorResponse); // Lança um erro com a mensagem de erro
      }
      const data = await response.json(); // Converte a resposta para JSON
      setProducts(data.products); // Atualiza o estado com a lista de produtos
    }
     catch (error) {
      console.error("Erro ao buscar produtos:", error); // Exibe o erro no console
      Alert.alert("Erro", "Não foi possível buscar os produtos."); // Exibe um alerta de erro
    }
  };

  const handleAddProduct = async () => {
    try {
      const response = await fetch(`${API_URL}/products`, {
        method: "POST", // Método HTTP POST para adicionar um produto
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, quantity, brand }), // Corpo da requisição em JSON
      });

      if (!response.ok) {
        const errorResponse = await response.text(); // Lê a resposta de erro
        throw new Error(errorResponse); // Lança um erro com a mensagem de erro
      }

      const data = await response.json(); // Converte a resposta para JSON
      setProducts([...products, { id: data.id, name, quantity, brand }]); // Adiciona o novo produto à lista de produtos
      setName(""); // Limpa o campo de nome
      setQuantity(""); // Limpa o campo de quantidade
      setBrand(""); // Limpa o campo de marca
    } catch (error) {
      console.error("Erro ao adicionar produto:", error); // Exibe o erro no console
      alert("Erro", "Não foi possível adicionar o produto."); // Exibe um alerta de erro
    }
  };

  const handleUpdateProduct = async () => {
    try {
      const response = await fetch(`${API_URL}/products/${selectedProduct.id}`, {
        method: "PUT", // Método HTTP PUT para atualizar um produto
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, quantity, brand }), // Corpo da requisição em JSON
      });

      if (!response.ok) {
        const errorResponse = await response.text(); // Lê a resposta de erro
        throw new Error(errorResponse); // Lança um erro com a mensagem de erro
      }

      fetchProducts(); // Busca os produtos novamente para atualizar a lista
      setSelectedProduct(null); // Reseta o produto selecionado
      setName(""); // Limpa o campo de nome
      setQuantity(""); // Limpa o campo de quantidade
      setBrand(""); // Limpa o campo de marca
    } catch (error) {
      console.error("Erro ao atualizar produto:", error); // Exibe o erro no console
      Alert.alert("Erro", "Não foi possível atualizar o produto."); // Exibe um alerta de erro
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      const response = await fetch(`${API_URL}/products/${id}`, {
        method: "DELETE", // Método HTTP DELETE para deletar um produto
      });

      if (!response.ok) {
        const errorResponse = await response.text(); // Lê a resposta de erro
        throw new Error(errorResponse); // Lança um erro com a mensagem de erro
      }

      fetchProducts(); // Busca os produtos novamente para atualizar a lista
    } catch (error) {
      console.error("Erro ao deletar produto:", error); // Exibe o erro no console
      Alert.alert("Erro", "Não foi possível deletar o produto."); // Exibe um alerta de erro
    }
  };

  const handleSelectProduct = (product) => {
    setSelectedProduct(product); // Define o produto selecionado para edição
    setName(product.name); // Preenche o campo de nome com o nome do produto
    setQuantity(product.quantity.toString()); // Preenche o campo de quantidade com a quantidade do produto
    setBrand(product.brand); // Preenche o campo de marca com a marca do produto
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome do Produto"
        value={name}
        onChangeText={setName} // Atualiza o estado do nome quando o texto muda
      />
      <TextInput
        style={styles.input}
        placeholder="Quantidade"
        value={quantity}
        onChangeText={setQuantity} // Atualiza o estado da quantidade quando o texto muda
        keyboardType="numeric" // Define o tipo de teclado como numérico
      />
      <TextInput
        style={styles.input}
        placeholder="Marca"
        value={brand}
        onChangeText={setBrand} // Atualiza o estado da marca quando o texto muda
      />
      <Button
        title={selectedProduct ? "Atualizar Produto" : "Adicionar Produto"} // Define o texto do botão com base no estado do produto selecionado
        onPress={selectedProduct ? handleUpdateProduct : handleAddProduct} // Chama a função de adicionar ou atualizar produto ao pressionar o botão
      />
      <FlatList
        data={products} // Define a lista de produtos a ser exibida
        keyExtractor={(item) => item.id.toString()} // Define a chave única para cada item na lista
        renderItem={({ item }) => (
          <View style={styles.product}>
            <Text>{item.name}</Text> {/* Exibe o nome do produto */}
            <Text>{item.quantity}</Text> {/* Exibe a quantidade do produto */}
            <Text>{item.brand}</Text> {/* Exibe a marca do produto */}
            <Button title="Editar" onPress={() => handleSelectProduct(item)} /> {/* Botão para editar o produto */}
            <Button
              title="Deletar"
              onPress={() => handleDeleteProduct(item.id)} // Botão para deletar o produto
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff", // Estilo do container principal
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 10,
    padding: 10, // Estilo dos inputs de texto
  },
  product: {
    padding: 10,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1, // Estilo dos itens da lista de produtos
  },
});